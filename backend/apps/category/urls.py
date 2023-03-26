from django.urls import include, path
from .views import CategoriesView
from rest_framework import routers
from rest_framework_extensions.routers import ExtendedSimpleRouter

router: ExtendedSimpleRouter = ExtendedSimpleRouter()

router = routers.DefaultRouter()

router.register(r'categories', CategoriesView, basename='categories')

urlpatterns = [
    path('', include(router.urls)),
]
