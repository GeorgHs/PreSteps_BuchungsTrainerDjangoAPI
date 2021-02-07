# Generated by Django 3.1.6 on 2021-02-07 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lead',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100)),
                ('email', models.EmailField(max_length=100, unique=True)),
                ('message', models.CharField(blank=True, max_length=500)),
                ('create_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
