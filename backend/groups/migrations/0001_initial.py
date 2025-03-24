# Generated by Django 5.1.1 on 2025-02-11 08:34

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, verbose_name='Название')),
                ('avatar', models.ImageField(default=None, null=True, upload_to='', verbose_name='Аватар')),
                ('slug', models.SlugField(unique=True)),
                ('description', models.TextField(default=None, null=True)),
            ],
            options={
                'verbose_name': 'Группа',
                'verbose_name_plural': 'Группы',
                'ordering': ['-id'],
            },
        ),
        migrations.CreateModel(
            name='GroupMembership',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('owner', 'админ'), ('moderator', 'модератор'), ('member', 'участник')], default='member', max_length=150)),
                ('group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='group', to='groups.group', verbose_name='Где')),
                ('member', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='group', to=settings.AUTH_USER_MODEL, verbose_name='Кто')),
            ],
            options={
                'verbose_name': 'Членство в группе',
                'verbose_name_plural': 'Членство в группах',
                'ordering': ['-id'],
                'unique_together': {('member', 'group')},
            },
        ),
    ]
