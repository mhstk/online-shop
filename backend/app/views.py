from rest_framework.viewsets import ReadOnlyModelViewSet

from .permissions import AdminOrReadOnly
from .serializers import *

from django.shortcuts import render
from rest_framework import viewsets, mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser


class CategoryViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AdminOrReadOnly,)
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class ItemViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AdminOrReadOnly,)
    serializer_class = ItemSerializer
    queryset = Item.objects.all()


class OrderViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (AdminOrReadOnly,)
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
