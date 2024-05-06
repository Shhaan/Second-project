from rest_framework import serializers
from .models import Customers


class CurrentUser(serializers.ModelSerializer):
    class Meta:
        model = Customers
        exclude = ['password']
         
        


