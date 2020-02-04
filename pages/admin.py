from django.contrib import admin

from .models import Form, Skill, SkillCategory, ExpCard, ExpCategory, Project


class FormAdmin(admin.ModelAdmin):
    search_fields = ('name', 'email',)
    list_filter = ('created_at',)
    list_display = ('name', 'email', 'created_at',)


class SkillAdmin(admin.ModelAdmin):
    search_fields = ('name',)
    autocomplete_fields = ('category',)
    list_display = ('name', 'category', 'width', 'img',)
    readonly_fields = ('image_tag',)


class SkillInline(admin.TabularInline):
    model = Skill
    extra = 1

class SkillCategoryAdmin(admin.ModelAdmin):
    search_fields = ('category',)
    inlines = [
            SkillInline,
            ]


class ExpCardAdmin(admin.ModelAdmin):
    search_fields = ('name', 'desc')
    list_filter = ('date',)
    autocomplete_fields = ('category',)
    list_display = ('name', 'category', 'date', 'img',)
    readonly_fields = ('image_tag',)


class ExpInline(admin.TabularInline):
    model = ExpCard
    extra = 1


class ExpCategoryAdmin(admin.ModelAdmin):
    search_fields = ('name',)
    inlines = [
            ExpInline,
            ]
    list_display = ('name', 'id',)
    list_display_links = ('name',)


class ProjectAdmin(admin.ModelAdmin):
    search_fields = ('name', 'desc',)
    list_filter = ('date',)
    list_display = ('name', 'id', 'tag', 'date')
    list_display_links = ('name',)
    readonly_fields = ('image_tag',)

admin.site.register(Form, FormAdmin)
admin.site.register(Skill, SkillAdmin)
admin.site.register(SkillCategory, SkillCategoryAdmin)
admin.site.register(ExpCard, ExpCardAdmin)
admin.site.register(ExpCategory, ExpCategoryAdmin)
admin.site.register(Project, ProjectAdmin)
