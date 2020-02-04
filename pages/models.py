from django.db import models
from django.utils.safestring import mark_safe
from datetime import datetime


class SkillCategory(models.Model):
    category = models.CharField(max_length=100)
    icon = models.TextField(
            max_length=200,
            default="<i className=\"fas fa-desktop\"></i>"
            )

    class Meta:
        verbose_name_plural = "skill categories"

    def __str__(self):
        return self.category


class Skill(models.Model):
    name = models.CharField(max_length=20, default="new skill")
    width = models.PositiveIntegerField(default=60)
    img = models.ImageField(
            upload_to='skill_thumbnails/',
            blank=True,
            null=True,
            )
    category = models.ForeignKey(
            SkillCategory,
            on_delete=models.CASCADE,
            blank=True,
            null=True,
            )

    def __str__(self):
        return self.name

    def image_tag(self):
        return mark_safe('<img src="{}" width="150" />'.format(self.img.url) )
    image_tag.short_description = 'image preview'


class Form(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class ExpCategory(models.Model):
    name = models.CharField(max_length=100)
    icon = models.TextField(
            max_length=200,
            default="<i className=\"fas fa-graduation-cap\"></i>"
            )
    bg_color = models.TextField(
                max_length=50,
                default="green accent-4"
            )
    tag = models.CharField(max_length=10, default="#edu")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "exp categories"


class ExpCard(models.Model):
    category = models.ForeignKey(
            ExpCategory,
            on_delete=models.CASCADE
            )
    img = models.ImageField(
            upload_to='exp_cards/'
            )
    def image_tag(self):
        return mark_safe('<img src="{}" width="150" />'.format(self.img.url) )
    image_tag.short_description = 'image preview'
    name = models.CharField(max_length=20)
    date = models.DateTimeField(default=datetime.now)
    desc = models.TextField()

    def __str__(self):
        return self.name


class Project(models.Model):
    img = models.ImageField(
            upload_to='projects/'
            )
    def image_tag(self):
        return mark_safe('<img src="{}" width="150" />'.format(self.img.url) )
    image_tag.short_description = 'image preview'
    name = models.CharField(max_length=20)
    date = models.DateTimeField(default=datetime.now)
    desc = models.TextField()
    tag = models.CharField(max_length=10, default="#tag")
    link = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name
