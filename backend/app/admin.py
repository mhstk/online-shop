from django.contrib import admin
from app import models
admin.site.register(models.Category)
admin.site.register(models.Item)
admin.site.register(models.Order)