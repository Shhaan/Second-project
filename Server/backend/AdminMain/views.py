from django.shortcuts import render
from rest_framework import viewsets
from .models import Category
from .serializer import CategorySerilizer
from rest_framework.views import APIView
from rest_framework import permissions,status
from rest_framework.response import Response 
from django.db.models import Q

# Create your views here.

class CategoryCrud(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAdminUser]
    queryset = Category.objects.all().order_by('-id')
    serializer_class = CategorySerilizer

class CategoryPartialDelete(APIView):
    def patch(self, request, id):
        is_blocked = request.data.get('is_blocked')
        
        if is_blocked:
            
            category = Category.objects.filter(Q(id=id)).update(is_blocked=False)
            
            
        else:
            category = Category.objects.filter(Q(id=id)|Q(parent_id=id)).update(is_blocked=True)
        
        category = Category.objects.all()
            
        serializer = CategorySerilizer(category,many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
        