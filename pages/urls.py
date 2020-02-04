from django.urls import path
from rest_framework.routers import SimpleRouter

from .views import CreateForm, SkillViewSet, SkillCategoryViewSet, ExpCardViewSet, ExpCategoryViewSet, ProjectViewSet

router = SimpleRouter()
router.register('create_form', CreateForm, base_name='create_form')
router.register('skills', SkillViewSet, base_name='skills')
router.register('skill_categories', SkillCategoryViewSet, base_name='skill_categories')
router.register('exps', ExpCardViewSet, base_name='exps')
router.register('exp_categories', ExpCategoryViewSet, base_name='exp_categories')
router.register('projects', ProjectViewSet, base_name='projects')

urlpatterns = router.urls
