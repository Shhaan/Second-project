# Generated by Django 5.0.6 on 2024-05-13 04:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AdminMain', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='parent_id',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]