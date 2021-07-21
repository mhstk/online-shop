from django.urls import path, include
from rest_framework.routers import DefaultRouter

from app import views

router = DefaultRouter()
router.register('category', views.CategoryViewSet)
router.register('item', views.ItemViewSet)
router.register('order', views.OrderViewSet)

app_name = 'api'

urlpatterns = [
    path('', include(router.urls))
]
