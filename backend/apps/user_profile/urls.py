from django.urls import include, path
from .views import UserProfileView
from rest_framework import routers
from rest_framework_extensions.routers import ExtendedSimpleRouter

router: ExtendedSimpleRouter = ExtendedSimpleRouter()

router = routers.DefaultRouter()

router.register(r'profile', UserProfileView, basename='profile')

urlpatterns = [
    path('', include(router.urls)),
]
