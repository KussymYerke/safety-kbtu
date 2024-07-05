"""
URL configuration for SafetyMap project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.mainn, name='mainn' ),

    path('redirected/', views.redirected, name='redirected'),
    path('ru_page/', views.ru, name='ru_page'),
    path('kz_page/', views.kz, name='kz_page'),

    path('map/', views.index, name='mapi'),
    path('video/', views.video_single, name='video'),

    path('video_kz/', views.video_kz, name='video_kz'),
    path('video_ru/', views.video_ru, name='video_ru'),
    path('video_en/', views.video_en, name='video_en'),

]



