from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *
router = DefaultRouter()
router.register(r"category", CategoryCrud, basename='category')

urlpatterns = [
    
         path("", include(router.urls)), 
         path("category/partial-delete/<int:id>/", CategoryPartialDelete.as_view(),name='category' ), 

         path("farmers/", Fetchfarmer.as_view(),name='farmer' ), 
         path('customer/',Fetchcustomer.as_view(),name='customer')

         ,
         path('orders/',FarmerOrders.as_view(),name='farmercrop'),
         path('orders-details/<int:id>/',FarmerOrdersdetails.as_view(),name='farmercrop'),


         
         
]