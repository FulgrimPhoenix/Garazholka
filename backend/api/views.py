import uuid
from users.models import MyUser
from djoser.views import UserViewSet
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

from groups.models import Group, GroupMembership
from .serializer import GroupSerializer
# from .permissions import ModeratorOrReadOnly
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
        #    serializer = self.get_serializer(page, many=True)
        #    return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

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

    @action(detail=True,
            methods=['post'],
            permission_classes=[IsAuthenticated],
            url_path='change_user_status'
            )
    def change_user_status(self, request, slug=None):
        group = self.get_object()
        status = request.data.get('status')
        member_id = request.data.get('member_id')

        if not status:
            return Response(
                {"detail": "Необходимо указать статус."},
                status=400
                )

        if not member_id:
            return Response(
                {"detail": "Необходимо указать идентификатор участника."},
                status=400
                )

        try:
            # Проверяем, является ли текущий пользователь модератором группы
            membership = GroupMembership.objects.get(
                member=request.user,
                group=group
                )
            if membership.status != 'group_admin':
                return Response(
                    {"detail": "У вас нет прав для изменения статуса."},
                    status=403
                    )

            # Проверяем, существует ли участник с указанным идентификатором
            member_to_update = get_object_or_404(MyUser, id=member_id)

            # Проверяем, является ли участник членом группы
            membership_to_update = GroupMembership.objects.get(
                member=member_to_update, group=group
                )
            membership_to_update.status = status
            membership_to_update.save()

            return Response(
                {"detail": "Статус участника успешно изменен."},
                status=200
                )
        except GroupMembership.DoesNotExist:
            return Response(
                {"detail": "Участник не является членом группы."},
                status=404
                )
