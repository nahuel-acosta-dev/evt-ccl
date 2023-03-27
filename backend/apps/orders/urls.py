from django.urls import include, path
from .views import OrdersView
from rest_framework import routers
from rest_framework_extensions.routers import ExtendedSimpleRouter

router: ExtendedSimpleRouter = ExtendedSimpleRouter()

router = routers.DefaultRouter()

router.register(r'orders', OrdersView, basename='orders')

urlpatterns = [
    path('', include(router.urls)),
]
