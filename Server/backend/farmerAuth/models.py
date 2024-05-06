from django.db import models
from customerAuth.models import Customers


class Farmers(models.Model):
    user = models.ForeignKey(Customers,related_name = 'farmers', on_delete=models.CASCADE)
    Date_of_birth = models.DateField(auto_now=False, auto_now_add=False)
    Location = models.CharField(max_length=50)
    Bio = models.TextField()
    farmer_photo = models.ImageField(upload_to='farmer/')
    is_paid = models.BooleanField(default=False)
    Can_sell = models.BooleanField(default=False)
    longitude = models.CharField(max_length=50)
    latitude = models.CharField(max_length=50)
    
    def __str__(self) :
        return f"Name :{self.user.First_name}  ,Email:{self.user.Email}"
    
    
    

