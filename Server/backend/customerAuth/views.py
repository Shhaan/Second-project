from django.shortcuts import render
from rest_framework.views import APIView
from .serializer import CurrentUser
from rest_framework.generics import ListAPIView
from rest_framework import permissions,status
from .models import Customers
# Create your views here.


class Currentuser(ListAPIView):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Customers.objects.all()
    serializer_class = CurrentUser
    
class Registeruser():
    