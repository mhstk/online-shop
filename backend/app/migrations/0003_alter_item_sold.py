# Generated by Django 3.2.5 on 2021-07-21 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_alter_item_sold'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='sold',
            field=models.IntegerField(default=0),
        ),
    ]