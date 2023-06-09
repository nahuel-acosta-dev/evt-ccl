from apps.orders.countries import Countries
from django.db import models
from django.conf import settings
User = settings.AUTH_USER_MODEL


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address_line_1 = models.CharField(max_length=255, default='')
    address_line_2 = models.CharField(max_length=255, default='', blank=True)
    city = models.CharField(max_length=255, default='')
    state_province_region = models.CharField(max_length=255, default='')
    dni = models.CharField(max_length=20, default='')
    zipcode = models.CharField(max_length=20, default='')
    phone = models.CharField(max_length=255, default='')
    photo = models.ImageField(upload_to='photos/%Y/%m/', blank=True)
    country_region = models.CharField(
        max_length=255, choices=Countries.choices, default=Countries.Canada)

    def __str__(self):
        return f'{self.user.email}'
