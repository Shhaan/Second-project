# Generated by Django 5.0.6 on 2024-05-10 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('customerAuth', '0009_alter_customers_phone_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='customers',
            name='otp',
            field=models.CharField(blank=True, max_length=4, null=True),
        ),
        migrations.AlterField(
            model_name='customers',
            name='Phone_number',
            field=models.IntegerField(),
        ),
    ]
