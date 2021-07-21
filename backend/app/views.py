from rest_framework.viewsets import ReadOnlyModelViewSet

from .permissions import AdminOrReadOnly, OnlyAdminCanEdit
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
    permission_classes = (IsAuthenticated, OnlyAdminCanEdit)
    serializer_class = OrderSerializer
    http_method_names = ['get', 'post', 'head', 'patch']
    queryset = Order.objects.all()

    def get_queryset(self):
        queryset = self.queryset
        if not self.request.user.is_staff:
            queryset = queryset.filter(user=self.request.user)
        return queryset

    def get_serializer_class(self):
        serializer = self.serializer_class
        if self.request.method == 'PATCH':
            return OrderEditSerializer
        return OrderSerializer

    def perform_create(self, serializer):
        user = self.request.user
        user_name = user.first_name + " " + user.last_name
        data = self.request.data
        item_price = Item.objects.get(id=data["item"]).price
        count = data["count"]
        price = item_price * int(count)

        print("" + str(type(item_price)) + "   " + str(type(count)))
        serializer.save(user=user, address=user.address, price=price, user_name=user_name)
