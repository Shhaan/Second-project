# Generated by Django 5.0.6 on 2024-07-28 09:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('farmerAuth', '0006_farmerreview_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='farmers',
            name='feildPhoto',
        ),
        migrations.AddField(
            model_name='farmers',
            name='feildPhoto',
            field=models.ManyToManyField(to='farmerAuth.feildphotos'),
        ),
    ]
