from django.db import models

from backend import settings


class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return str(self.name)


DEFAULT_CATEGORY_ID = 1


class Item(models.Model):
    name = models.CharField(max_length=255, unique=True)
    category = models.ForeignKey(Category, default=DEFAULT_CATEGORY_ID, on_delete=models.SET_DEFAULT)
    price = models.IntegerField(default=0)
    available = models.IntegerField(default=0)
    sold = models.IntegerField(default=0)

    def __str__(self):
        return str(self.name)


class Order(models.Model):
    item_name = models.CharField(max_length=255)
    count = models.IntegerField()
    user_name = models.CharField(max_length=255)
    address = models.TextField()
    price = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True, blank=True)
    code = models.CharField(max_length=10, unique=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, blank=True, null=True, default=None,
                             on_delete=models.SET_DEFAULT)
    item = models.ForeignKey(Item, blank=True, null=True, default=None, on_delete=models.SET_DEFAULT)

    DOING = 'doing'
    FINISHED = 'finished'
    CANCELED = 'canceled'
    STATUS_CHOICES = [
        (DOING, 'Doing'),
        (FINISHED, 'Finished'),
        (CANCELED, 'Canceled'),
    ]
    status = models.CharField(max_length=8, choices=STATUS_CHOICES, default=DOING)

    def __str__(self):
        return f"{str(self.code)} {str(self.item_name)} {str(self.count)}"
