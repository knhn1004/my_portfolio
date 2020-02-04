from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from rest_framework.documentation import include_docs_urls
from rest_framework.schemas import get_schema_view
from rest_framework_swagger.views import get_swagger_view

API_TITLE = "Chia-hong's Portfolio"
API_DESCRIPTION = 'A Web API for the portfolio react frontend'
schema_view = get_swagger_view(title=API_TITLE)

urlpatterns = [
    path('chz_yumi_admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/v1/', include('pages.urls')),
    path('docs/', schema_view),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += path('', include('frontend.urls')),
