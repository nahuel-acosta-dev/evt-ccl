from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from apps.orders.serializers import OrderSerializer, OrderItemSerializer
from .models import Order, OrderItem


class OrdersView(viewsets.GenericViewSet):
    model = Order
    model_item = OrderItem
    serializer_class = OrderSerializer
    order_item_serializer_class = OrderItemSerializer
    queryset = None

    def get_object(self, pk):
        return get_object_or_404(self.model, pk=pk)

    def get_queryset(self):
        if self.queryset is None:
            self.queryset = self.serializer_class().Meta.model.objects\
                .all()
        return self.queryset

    def retrieve(self, request, pk=None):
        user = self.request.user

        try:
            if self.model.objects.filter(user=user, transaction_id=pk).exists():
                order = self.model.objects.get(
                    user=user, transaction_id=pk)
                result = {}
                result['status'] = order.status
                result['transaction_id'] = order.transaction_id
                result['amount'] = order.amount
                result['full_name'] = order.full_name
                result['address_line_1'] = order.address_line_1
                result['address_line_2'] = order.address_line_2
                result['city'] = order.city
                result['state_province_region'] = order.state_province_region
                result['postal_zip_code'] = order.postal_zip_code
                result['country_region'] = order.country_region
                result['telephone_number'] = order.telephone_number
                result['shipping_name'] = order.shipping_name
                result['shipping_time'] = order.shipping_time
                result['shipping_price'] = order.shipping_price
                result['date_issued'] = order.date_issued

                order_items = self.model_item.objects.order_by(
                    '-date_added').filter(order=order)
                result['order_items'] = []

                for order_item in order_items:
                    sub_item = {}

                    sub_item['name'] = order_item.name
                    sub_item['price'] = order_item.price
                    sub_item['count'] = order_item.count

                    result['order_items'].append(sub_item)

                """
                #esta es la forma de anidar los orders_items en orders usando el serializers
                
                orders_item = self.order_item_serializer_class(
                    order_items, many=True)

                print(orders_item.data)

                orders = self.serializer_class(
                    order, context={'order_item': orders_item.data})
                """

                return Response(
                    {'order': result},
                    # {'order': orders.data},
                    status=status.HTTP_200_OK
                )
            else:
                return Response(
                    {'error': 'Order with this transaction ID does not exist'},
                    status=status.HTTP_404_NOT_FOUND
                )
        except:
            return Response(
                {'error': 'Something went wrong when retrieving order detail'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

    def list(self, request, pk=None):
        user = self.request.user
        try:
            orders = self.model.objects.order_by(
                '-date_issued').filter(user=user)
            result = []

            for order in orders:
                item = {}
                item['status'] = order.status
                item['transaction_id'] = order.transaction_id
                item['amount'] = order.amount
                item['shipping_price'] = order.shipping_price
                item['date_issued'] = order.date_issued
                item['address_line_1'] = order.address_line_1
                item['address_line_2'] = order.address_line_2

                result.append(item)

            return Response(
                {'orders': result},
                status=status.HTTP_200_OK
            )
        except:
            return Response(
                {'error': 'Something went wrong when retrieving orders'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
