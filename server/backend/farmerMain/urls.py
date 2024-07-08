from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import *
router = DefaultRouter()
router.register(r"cropcrud", Cropcrud, basename='category')
urlpatterns =  [
          
         path('crop/',Farmercrop.as_view(),name='farmercrop'),
         path('cropadd/',Farmercropadd.as_view(),name='farmercrop'),
         path('cropimgall/<int:id>/',Farmercropimgall.as_view(),name='farmercrop'),


         path('',include(router.urls)),
   

         

      
    
    
]

 