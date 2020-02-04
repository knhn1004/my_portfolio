from rest_framework import serializers
from .models import Form, Skill, SkillCategory, ExpCategory, ExpCard, Project
from django.core.mail import send_mail


class FormSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('name', 'email', 'message',)
        model = Form

    def create(self, validated_data):
        send_mail(
                'New Message on Contact Form[chz1004.com]',
                "There's a new message on the site: {} --from {}({})".format(validated_data['message'], validated_data['name'], validated_data['email']),
                'em1210.chz1004.com',
                ['oliver12310@outlook.com']
                )
        return Form.objects.create(**validated_data)


class SkillSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'name', 'width', 'img', 'category')
        model = Skill


class SkillCategorySerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'category', 'icon')
        model = SkillCategory


class ExpCategorySerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'name', 'icon', 'bg_color', 'tag',)
        model = ExpCategory


class ExpCardSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'category', 'img', 'name', 'date', 'desc',)
        model = ExpCard


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        fields = ('id', 'name', 'img', 'date', 'desc', 'tag', 'link', 'github',)
        model = Project
