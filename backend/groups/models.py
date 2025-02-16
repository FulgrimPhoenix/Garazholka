from django.db import models
from users.models import MyUser

MAX_CHARFIELD_LENGHT = 150


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
    slug = models.SlugField(
        unique=True
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
    STATUS_CHOICES = {
        'owner': 'админ',
        'moderator': 'модератор',
        'member': 'участник',
    }
    member = models.ForeignKey(
        MyUser,
        on_delete=models.CASCADE,
        related_name='group',
        verbose_name='Кто'
    )
    group = models.ForeignKey(
        Group,
        on_delete=models.CASCADE,
        related_name='group',
        verbose_name='Где'
    )
    status = models.CharField(
        choices=STATUS_CHOICES,
        default='member',
        max_length=MAX_CHARFIELD_LENGHT,
    )

    class Meta:
        unique_together = ('member', 'group')
        verbose_name = 'Членство в группе'
        verbose_name_plural = 'Членство в группах'
        ordering = ['-id']

    def __str__(self):
        return f'{self.member} состоит в {self.group}'
