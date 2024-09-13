from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    description = models.TextField('Описание', blank=True)
    #  image = models.ImageField()
