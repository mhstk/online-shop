from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _

from .models import User


class UserAdmin(BaseUserAdmin):
    ordering = ("id",)
    list_display = ("id", "username", "is_superuser")

    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        (_('Permissions'), {
            'fields': ('is_active', 'is_superuser'),
        }),
        (_('Important dates'), {'fields': ('last_login',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'password1', 'password2'),
        }),
    )


# admin.register(User, UserAdmin)
admin.site.register(User)