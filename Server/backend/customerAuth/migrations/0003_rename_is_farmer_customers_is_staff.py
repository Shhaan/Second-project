# Generated by Django 5.0.4 on 2024-04-30 08:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('customerAuth', '0002_alter_customers_address_alter_customers_country_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customers',
            old_name='is_farmer',
            new_name='is_staff',
        ),
    ]