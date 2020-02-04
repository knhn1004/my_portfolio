from rest_framework import viewsets
from rest_framework import  mixins

from .models import Form, Skill, SkillCategory, ExpCard, ExpCategory, Project
from .serializers import FormSerializer, SkillSerializer, SkillCategorySerializer, ExpCardSerializer, ExpCategorySerializer, ProjectSerializer


class CreateForm(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Form.objects.all()
    serializer_class = FormSerializer


class SkillViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class SkillCategoryViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = SkillCategory.objects.all().order_by('id')
    serializer_class = SkillCategorySerializer


class ExpCategoryViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = ExpCategory.objects.all().order_by('id')
    serializer_class = ExpCategorySerializer


class ExpCardViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = ExpCard.objects.all().order_by('date')
    serializer_class = ExpCardSerializer


class ProjectViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Project.objects.all().order_by('-date')
    serializer_class = ProjectSerializer
