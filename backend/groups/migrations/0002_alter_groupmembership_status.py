# Generated by Django 5.1.1 on 2025-03-02 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupmembership',
            name='status',
            field=models.CharField(choices=[('group_admin', 'админ'), ('member', 'участник')], default='member', max_length=150),
        ),
    ]
