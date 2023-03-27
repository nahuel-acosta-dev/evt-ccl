from rest_framework import serializers
from .models import Order, OrderItem


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ('name', 'price', 'count')


class OrderSerializer(serializers.ModelSerializer):
    order_item = serializers.SerializerMethodField('get_orders_items')

    def get_orders_items(self, obj):
        order_item = self.context.get('order_item')
        print('el siguiente es el get_orders_items')
        print(order_item)
        return order_item

    class Meta:
        model = Order
        fields = ('status',
                  'transaction_id',
                  'amount',
                  'full_name',
                  'address_line_1',
                  'address_line_2',
                  'city',
                  'state_province_region',
                  'postal_zip_code',
                  'country_region',
                  'telephone_number',
                  'shipping_name',
                  'shipping_time',
                  'shipping_price',
                  'date_issued',
                  'order_item'
                  )
