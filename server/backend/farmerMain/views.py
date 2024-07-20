 
from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView,ListAPIView
from rest_framework import permissions,status
from rest_framework.response import Response 
from rest_framework.viewsets import ModelViewSet
from .serializer import *
from farmerAuth.models import *
from AdminMain.models import Category
from .permision import IsStaffUser
from django.db.models import *
from customerProfile.serializer import CropSerializer
from farmerMain.models import Crops

from rest_framework.parsers import MultiPartParser, FormParser
# Create your views here.

class Farmercrop(APIView):
    permission_classes = [IsStaffUser]
    def get(self,request):
        
        crop = Crops.objects.filter(farmer =Farmers.objects.get(user=request.user))
        serializers = CropSerializer(crop,many=True)
        return Response(serializers.data,status=status.HTTP_200_OK)
class Cropcrud(ModelViewSet):
    permission_classes = [IsStaffUser]
     
    queryset = Crops.objects.all().order_by('-id')
    serializer_class = CropSerializer

class Farmercropimgall(RetrieveAPIView):
    queryset = Crops.objects.all()
    serializer_class = Cropseri
    permission_classes = [IsStaffUser]
    lookup_field = 'id'

class Farmercropadd(APIView):
    permission_classes = [IsStaffUser]
    parser_classes = [MultiPartParser,FormParser]
    def post(self,request): 
        farmer = Farmers.objects.filter(user = request.user).first()
        category = Category.objects.get(id=request.data['category'])
        images = request.FILES.getlist('image')
        data = {'farmer':farmer,'category':category,'cropName':request.data['cropName'],'price':request.data['price'],'quantity':request.data['quantity'],'About':request.data['About']}
 
        crop = Crops.objects.create(**data)
        for img in images:
            Cropimage.objects.create(crop=crop,image=img)
        serilizer = CropSerializer(crop)
        return Response(serilizer.data,status=status.HTTP_201_CREATED)

