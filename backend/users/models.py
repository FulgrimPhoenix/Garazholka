from django.contrib.auth.models import AbstractUser
from django.db import models

MAX_CHARFIELD_LENGHT = 150


class MyUser(AbstractUser):
    avatar = models.ImageField(
        'Аватар',
        null=True,
        default=None
    )
    email = models.CharField(
        unique=True,
        max_length=MAX_CHARFIELD_LENGHT,
    )
    first_name = models.CharField(
        'Имя',
        max_length=MAX_CHARFIELD_LENGHT
    )
    last_name = models.CharField(
        'Фамилия',
        max_length=MAX_CHARFIELD_LENGHT
    )
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    class Meta(AbstractUser.Meta):
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ['-id']

    def __str__(self):
        return f'{self.email}'


class Group(models.Model):
    title = models.CharField(
        'Название',
        max_length=MAX_CHARFIELD_LENGHT
    )
    avatar = models.ImageField(
        'Аватар',
        null=True,
        default=None
    )
    description = models.TextField(
        null=True,
        default=None
    )

    class Meta:
        verbose_name = 'Группа'
        verbose_name_plural = 'Группы'
        ordering = ['-id']

    def __str__(self):
        return f'группа {self.title}'


class GroupMembership(models.Model):
    member = models.ForeignKey(
        MyUser,
        on_delete=models.CASCADE,
        related_name='group',
        verbose_name='Кто'
    )
    group = models.ForeignKey(
        Group,
        on_delete=models.CASCADE,
        related_name='members',
        verbose_name='Где'
    )

    class Meta:
        unique_together = ('member', 'group')
        verbose_name = 'Членство в группе'
        verbose_name_plural = 'Членство в группах'
        ordering = ['-id']

    def __str__(self):
        return f'{self.member} состоит в {self.group}'
