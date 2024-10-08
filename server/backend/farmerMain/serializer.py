from rest_framework import serializers
from farmerMain.models import Crops,Cropimage
from customerAuth.models import Customers 
from farmerAuth.models import Farmers
from AdminMain.models import Category
from customerProfile.serializer import *
 

class Cropseri(serializers.ModelSerializer):
      
    category = CategorySerializer()
    farmer = FarmerSerializer()
    image = serializers.SerializerMethodField()
    parent = serializers.SerializerMethodField()
    class Meta:
        model = Crops
        fields = '__all__'
    def get_image(self, obj):
        image = Cropimage.objects.filter(crop=obj)
        if image:
            return CropImageSerializer(image,many=True).data
        return None 
    def get_parent(self,obj):
        parent = Category.objects.filter(id=obj.category.parent_id).first()

        return CategorySerializer(parent ).data

class OrderserializerFarmer(serializers.ModelSerializer):
    farmer = FarmerSerializer()
    user  = ProfileSerializer()
    class Meta:
        model = Order
        fields = '__all__'

 