import uuid
# from users.models import MyUser
from djoser.views import UserViewSet
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

from groups.models import Group, GroupMembership
from .serializer import GroupSerializer
from .permissions import ModeratorOrReadOnly


class MyUserViewSet(UserViewSet):

    @action(['get', 'put', 'patch', 'delete'],
            detail=False,
            permission_classes=[IsAuthenticated]
            )
    def me(self, request, *args, **kwargs):
        self.get_object = self.get_instance
        if request.method == 'GET':
            return self.retrieve(request, *args, **kwargs)
        elif request.method == 'PUT':
            return self.update(request, *args, **kwargs)
        elif request.method == 'PATCH':
            return self.partial_update(request, *args, **kwargs)
        elif request.method == 'DELETE':
            return self.destroy(request, *args, **kwargs)


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    permission_classes = ModeratorOrReadOnly,
    serializer_class = GroupSerializer
    lookup_field = 'slug'  # Используем slug вместо id для поиска групп по URL

    def perform_create(self, serializer):
        """Генерация случайного slug и создание группы."""
        random_slug = str(uuid.uuid4())[:6]
        """Добавляем owner при создании новой группы."""
        instance = serializer.save(slug=random_slug)
        GroupMembership.objects.create(
            member=self.request.user, group=instance, status='owner'
        )
