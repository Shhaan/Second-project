# Generated by Django 5.0.4 on 2024-04-30 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customerAuth', '0004_alter_customers_is_blocked'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customers',
            name='is_blocked',
            field=models.BooleanField(default=False),
        ),
    ]
