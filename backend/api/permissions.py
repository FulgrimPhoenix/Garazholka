from rest_framework import permissions
from groups.models import Group, GroupMembership


class OwnerOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        return (
            request.method in permissions.SAFE_METHODS
            or request.user.is_authenticated
        )

    def has_object_permission(self, request, view, obj):
        return (obj.author == request.user
                or request.method in permissions.SAFE_METHODS)


class ModeratorOrReadOnly(permissions.BasePermission):

    def has_permission(self, request, view):
        return (
            request.method in permissions.SAFE_METHODS
            or request.user.is_authenticated
        )

    def has_object_permission(self, request, view, obj):

        if request.method in permissions.SAFE_METHODS:
            return True
        elif isinstance(obj, GroupMembership):  # Проверка на объект членства
            user_membership = GroupMembership.objects.get(
                member=request.user,
                group=obj.group
            )
            return (
                user_membership.status == 'owner'
                or user_membership.status == 'moderator'
            )
        elif isinstance(obj, Group):  # Проверка на объект группы
            user_membership = GroupMembership.objects.get(
                member=request.user,
                group=obj.group
            )
            return user_membership.status == 'owner'
        else:
            return False
