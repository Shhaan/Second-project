# Generated by Django 5.0.6 on 2024-05-08 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customerAuth', '0008_alter_customers_groups_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customers',
            name='Phone_number',
            field=models.IntegerField(max_length=10),
        ),
    ]
