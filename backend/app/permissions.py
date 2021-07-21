from rest_framework import permissions


class AdminOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow access to lists for admins
    """

    def has_permission(self, request, view):
        if request.user.is_authenticated:
            if (
                    view.action == "create" or
                    view.action == "destroy" or
                    view.action == "update" or
                    view.action == "partial_update"
            ):
                return request.user.is_staff
            else:
                return True
        else:
            return False
