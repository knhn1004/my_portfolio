from django.conf.urls import url
from django.urls import path
from .views import index

urlpatterns = [
        path('', index, name='home'),
        url(r'^.*/', index)
        ]
