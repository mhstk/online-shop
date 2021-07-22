from django.db.models.functions import datetime
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


class OrderSerializer(serializers.ModelSerializer):
    """Serializer for ingredient objects"""

    class Meta:
        model = Order
        fields = (
            'id',
            'item',
            'count',
            'address',
            'price',
            'date',
            'code',
            'user_name',
            'status',
            'item_name',
        )
        read_only_fields = ('id', 'date', 'address', 'price', 'user_name', 'status')
        write_only_fields = ('item',)


class OrderEditSerializer(serializers.ModelSerializer):
    """Serializer for ingredient objects"""

    class Meta:
        model = Order
        fields = (
            'status',
        )
        read_only_fields = ('date',)
