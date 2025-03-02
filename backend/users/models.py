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
    location = models.CharField(
        'Локация',
        max_length=MAX_CHARFIELD_LENGHT,
        null=True,
        default=None
    )
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    class Meta(AbstractUser.Meta):
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
        ordering = ['-id']

    def __str__(self):
        return f'{self.email}'
