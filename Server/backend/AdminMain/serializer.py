from rest_framework import serializers
from .models import Category

class CategorySerilizer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields= '__all__'
    def validate_categoryName(self,data):
        if Category.objects.filter(categoryName = data).exists():
            print(data)
       
        return data

