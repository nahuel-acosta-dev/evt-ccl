from .serializers import UserProfileSerializer, UpdateUserProfileSerializer
from django.db.models import Q
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate
from rest_framework.decorators import (api_view, permission_classes,
                                       action)
from rest_framework import viewsets
from core.authentication import unauthorized
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.response import Response
from .models import UserProfile
from apps.user.models import UserAccount
from core.authentication import get_user_data, access_user_data
# Create your views here.


class UserProfileView(viewsets.GenericViewSet):
    model = UserProfile
    model_user = UserAccount
    serializer_class = UserProfileSerializer
    update_serializer_class = UpdateUserProfileSerializer
    queryset = None

    def get_object(self, pk):
        return get_object_or_404(self.model, pk=pk)

    def get_queryset(self):
        if self.queryset is None:
            self.queryset = self.serializer_class().Meta.model.objects\
                .all()
        return self.queryset

    def update(self, request, pk=None):
        try:
            user = self.request.user
            data = self.request.data

            address_line_1 = data['address_line_1']
            address_line_2 = data['address_line_2']
            city = data['city']
            state_province_region = data['state_province_region']
            zipcode = data['zipcode']
            phone = data['phone']
            country_region = data['country_region']

            self.model.objects.filter(user=user).update(
                address_line_1=address_line_1,
                address_line_2=address_line_2,
                city=city,
                state_province_region=state_province_region,
                zipcode=zipcode,
                phone=phone,
                country_region=country_region
            )

            user_profile = self.model.objects.get(user=user)
            user_profile = self.serializer_class(user_profile)

            return Response(
                {'profile': user_profile.data},
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {'error': 'Something went wrong when updating profile'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def retrieve(self, request, pk=None):
        try:
            user = self.request.user
            user_profile = self.model.objects.get(user=user)
            user_profile = self.serializer_class(user_profile)

            return Response(
                {'profile': user_profile.data},
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {'error': 'Something went wrong when retrieving profile'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
