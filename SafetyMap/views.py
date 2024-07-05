# mainapp/views.py

from django.shortcuts import render
from django.http import HttpResponse
from django.templatetags.static import static

def index(request):
    return render(request, 'map_template.html')

def mainn(request):
    return render(request, 'index.html')

def redirected(request):
    return render(request, 'redirected-page.html')

def kz(request):
    return render(request, 'kz_page.html')

def ru(request):
    return render(request, 'ru_page.html')

def video_kz(request):
    return render(request, 'video-single_kaz.html')

def video_single(request):
    return render(request, 'video-single.html')

def video_en(request):
    return render(request, 'video-single_en.html')