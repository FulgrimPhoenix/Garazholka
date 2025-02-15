import base64

from django.core.files.base import ContentFile
from djoser.serializers import UserSerializer
from rest_framework import serializers
from groups.models import Group, GroupMembership

MAX_CHARFIELD_LENGHT = 150


class Base64ImageField(serializers.ImageField):
    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith('data:image'):
            format, imgstr = data.split(';base64,')
            ext = format.split('/')[-1]

            data = ContentFile(base64.b64decode(imgstr), name='temp.' + ext)

        return super().to_internal_value(data)


class MyUserSerializer(UserSerializer):

    avatar = Base64ImageField()

    class Meta(UserSerializer.Meta):
        fields = UserSerializer.Meta.fields + (
            'avatar',
        )


class MemberSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='member.username')
    avatar = serializers.CharField(source='member.avatar')
    status = serializers.CharField(source='status')

    class Meta:
        model = GroupMembership
        fields = ['username', 'avatar', 'status']


class GroupSerializer(serializers.ModelSerializer):
    title = serializers.CharField(max_length=MAX_CHARFIELD_LENGHT)
    avatar = Base64ImageField()
    slug = serializers.CharField(read_only=True)
    description = serializers.CharField(allow_null=True, allow_blank=True)
    members = serializers.SerializerMethodField()

    class Meta:
        model = Group
        fields = ['title', 'avatar', 'slug', 'description', 'members']

    def get_members(self, obj):
        """Возвращает информацию об участниках группы"""
        memberships = GroupMembership.objects.filter(group=obj)
        serializer = MemberSerializer(memberships, many=True)
        return serializer.data
