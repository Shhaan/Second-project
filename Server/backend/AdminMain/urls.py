from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *
router = DefaultRouter()
router.register(r"category", CategoryCrud, basename='category')

urlpatterns = [
    
         path("", include(router.urls)), 
         path("category/partial-delete/<int:id>/", CategoryPartialDelete.as_view(),name='category' ), 
         
         
]