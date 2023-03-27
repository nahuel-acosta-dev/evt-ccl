from django.urls import include, path
from .views import ProductsView
from rest_framework import routers
from rest_framework_extensions.routers import ExtendedSimpleRouter

router: ExtendedSimpleRouter = ExtendedSimpleRouter()

router = routers.DefaultRouter()

router.register(r'products', ProductsView, basename='products')

urlpatterns = [
    path('', include(router.urls)),
]
