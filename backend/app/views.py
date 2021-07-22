import uuid

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ReadOnlyModelViewSet

from .permissions import AdminOrReadOnly, OnlyAdminCanEdit
from .serializers import *

from django.shortcuts import render
from rest_framework import viewsets, mixins, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser


def generate_code():
    return "SHOP" + str(uuid.uuid4())[0:6]


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

    def get_queryset(self):
        sort = self.request.query_params.get('sort')
        categories = self.request.query_params.get('cat')
        search = self.request.query_params.get('search')
        queryset = Item.objects.all()
        if sort:
            if sort == "price":
                queryset = queryset.order_by('-price')
            if sort == "date":
                queryset = queryset.order_by('-id')

        if categories:
            cats = categories.split(',')
            print(cats)
            queryset = queryset.filter(category_id__in=cats)
        if search:
            queryset = queryset.filter(name__contains=search)

        return queryset

    @action(methods=['POST'], detail=True, url_path='buy')
    def buy(self, request, pk=None):
        """Upload an image to a recipe"""
        if not self.request.user.is_authenticated:
            return Response(
                {"message": "not authenticated"},
                status=status.HTTP_401_UNAUTHORIZED
            )
        item = self.get_object()
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            count = int(serializer.validated_data.get("count"))
            item_available = item.available
            if count > item_available:
                return Response(
                    {"details": "item is not available"},
                    status=status.HTTP_400_BAD_REQUEST
                )
            user = self.request.user
            user_name = user.first_name + ' ' + user.last_name
            address = user.address
            item_name = item.name
            item_price = int(item.price)
            total_price = item_price * count
            code = generate_code()
            serializer.save(
                user_name=user_name,
                item_name=item_name,
                price=total_price,
                code=code,
                address=address,
                user=user
            )
            item.sold = item.sold + count
            item.available = item.available - count
            item.save()
            return Response(
                serializer.data,
                status=status.HTTP_200_OK
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )


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
