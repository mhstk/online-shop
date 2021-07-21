from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    """Serializer for ingredient objects"""

    class Meta:
        model = Category
        fields = ('id', 'name')
        read_only_fields = ('id',)


class ItemSerializer(serializers.ModelSerializer):
    """Serializer for ingredient objects"""
    category = serializers.PrimaryKeyRelatedField(
        many=False,
        queryset=Category.objects.all()
    )

    class Meta:
        model = Item
        fields = ('id', 'name', "category", "price", "available", "sold")
        read_only_fields = ('id',)


class OrderSerializer(serializers.Serializer):
    """Serializer for ingredient objects"""
    item = serializers.PrimaryKeyRelatedField(
        many=False,
        queryset=Item.objects.all()
    )
    count = serializers.IntegerField()


