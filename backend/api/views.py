import uuid
# from users.models import MyUser
from djoser.views import UserViewSet
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

from groups.models import Group, GroupMembership
from .serializer import GroupSerializer
from .permissions import ModeratorOrReadOnly
from .utilites import get_user_groups


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
    # permission_classes = ModeratorOrReadOnly,
    serializer_class = GroupSerializer
    lookup_field = 'slug'  # Используем slug вместо id для поиска групп по URL

    def perform_create(self, serializer):
        """Генерация случайного slug и создание группы."""
        random_slug = str(uuid.uuid4())[:6]
        """Добавляем owner при создании новой группы."""
        instance = serializer.save(slug=random_slug)
        GroupMembership.objects.create(
            member=self.request.user, group=instance, status='group_admin'
        )

    def list(self, request, *args, **kwargs):
        # Здесь можно определить специфический queryset для метода list
        queryset = queryset = get_user_groups(self.request.user)

        # page = self.paginate_queryset(queryset)
        # if page is not None:
            # serializer = self.get_serializer(page, many=True)
            # return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    # def retrieve(self, request, *args, **kwargs):
    #     # Добавляем поддержку метода POST
    #     if request.method == 'POST':
    #         group = self.get_object()
    #         if GroupMembership.objects.filter(
    #             member=request.user,
    #             group=group
    #         ).exists():
    #             return Response(
    #                 {"detail": "Вы уже являетесь участником этой группы."},
    #                 status=409
    #             )
    #         GroupMembership.objects.create(
    #             member=request.user,
    #             group=group,
    #             status='member'
    #         )

    #         return Response(
    #             {"detail": "Участник успешно добавлен."},
    #             status=201
    #             )

    #     return super().retrieve(request, *args, **kwargs)

    @action(detail=True,
            methods=['post'],
            permission_classes=[IsAuthenticated],
            )
    def join_group(self, request, slug=None):
        group = self.get_object()
        if GroupMembership.objects.filter(
                member=request.user,
                group=group
        ).exists():
            return Response(
                {"detail": "Вы уже являетесь участником этой группы."},
                status=409
            )
        GroupMembership.objects.create(
            member=request.user,
            group=group,
            status='member'
        )

        return Response({"detail": "Участник успешно добавлен."}, status=201)
