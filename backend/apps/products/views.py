from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import permissions, status
from rest_framework.decorators import (api_view, permission_classes,
                                       action)
from django.utils.decorators import method_decorator
from drf_yasg.utils import no_body, swagger_auto_schema
from apps.products.models import Product
from apps.products.serializers import ProductSerializer
from apps.category.models import Category

from rest_framework import viewsets
from rest_framework.generics import GenericAPIView

from django.db.models import Q


class ProductsView(viewsets.GenericViewSet):
    """
        endpoint de products
    """
    model = Product
    model_category = Category
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny, )
    queryset = None

    def get_object(self, pk):
        return get_object_or_404(self.model, pk=pk)

    def get_queryset(self):
        if self.queryset is None:
            self.queryset = self.serializer_class().Meta.model.objects\
                .all()
        return self.queryset

    def retrieve(self, request, pk=None):
        """
            es importante documentar todos los endpoints,
            como por ejemplo con la devolucion que hace al ser llamada.
            Retorna el producto solicitado.

            params.
            name ----> id de producto
        """
        try:
            product_id = int(pk)
        except:
            return Response(
                {'error': 'Product ID must be an integer'},
                status=status.HTTP_404_NOT_FOUND)

        if self.model.objects.filter(id=product_id).exists():
            product = Product.objects.get(id=product_id)

            product = self.serializer_class(product)

            return Response({'product': product.data}, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'Product with this ID does not exist'},
                status=status.HTTP_404_NOT_FOUND)

    def list(self, request, pk=None):
        sortBy = request.query_params.get('sortBy')

        if not (sortBy == 'date_created' or sortBy == 'price' or sortBy == 'sold' or sortBy == 'name'):
            sortBy = 'date_created'

        order = request.query_params.get('order')
        limit = request.query_params.get('limit')

        if not limit:
            limit = 6

        try:
            limit = int(limit)
        except:
            return Response(
                {'error': 'Limit must be an integer'},
                status=status.HTTP_404_NOT_FOUND)

        if limit <= 0:
            limit = 6

        if order == 'desc':
            sortBy = '-' + sortBy
            products = self.model.objects.order_by(sortBy).all()[:int(limit)]
        elif order == 'asc':
            products = self.model.objects.order_by(sortBy).all()[:int(limit)]
        else:
            products = self.model.objects.order_by(sortBy).all()

        products = self.serializer_class(products, many=True)

        if products:
            return Response({'products': products.data}, status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'No products to list'},
                status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=['POST'], url_name='search',
            url_path='search')
    def list_search(self, request, format=None):
        data = self.request.data

        try:
            category_id = int(data['category_id'])
        except:
            return Response(
                {'error': 'self.model_category ID must be an integer'},
                status=status.HTTP_404_NOT_FOUND)

        search = data['search']

        # Chequear si algo input ocurrio en la busqueda
        if len(search) == 0:
            # mostrar todos los productos si no hay input en la busqueda
            search_results = self.model.objects.order_by('-date_created').all()
        else:
            # Si hay criterio de busqueda, filtramos con dicho criterio usando Q
            search_results = self.model.objects.filter(
                Q(description__icontains=search) | Q(name__icontains=search)
            )

        if category_id == 0:
            search_results = self.serializer_class(search_results, many=True)
            return Response(
                {'search_products': search_results.data},
                status=status.HTTP_200_OK)

        # revisar si existe categoria
        if not self.model_category.objects.filter(id=category_id).exists():
            return Response(
                {'error': 'self.model_category not found'},
                status=status.HTTP_404_NOT_FOUND)

        category = self.model_category.objects.get(id=category_id)

        # si la categoria tiene apdre, fitlrar solo por la categoria y no el padre tambien
        if category.parent:
            search_results = search_results.order_by(
                '-date_created'
            ).filter(category=category)

        else:
            # si esta categoria padre no tiene hijjos, filtrar solo la categoria
            if not self.model_category.objects.filter(parent=category).exists():
                search_results = search_results.order_by(
                    '-date_created'
                ).filter(category=category)

            else:
                categories = self.model_category.objects.filter(
                    parent=category)
                filtered_categories = [category]

                for cat in categories:
                    filtered_categories.append(cat)

                filtered_categories = tuple(filtered_categories)

                search_results = search_results.order_by(
                    '-date_created'
                ).filter(category__in=filtered_categories)

        search_results = self.serializer_class(search_results, many=True)
        return Response({'search_products': search_results.data}, status=status.HTTP_200_OK)

    @action(methods=['GET'], url_name='related',
            url_path='related', detail=True, )
    def list_related(self, request, pk=None):
        try:
            product_id = int(pk)
        except:
            return Response(
                {'error': 'Product ID must be an integer'},
                status=status.HTTP_404_NOT_FOUND)

        # Existe product id
        if not self.model.objects.filter(id=product_id).exists():
            return Response(
                {'error': 'Product with this product ID does not exist'},
                status=status.HTTP_404_NOT_FOUND)

        category = self.model.objects.get(id=product_id).category

        if self.model.objects.filter(category=category).exists():
            # Si la categoria tiene padrem filtrar solo por la categoria y no el padre tambien
            if category.parent:
                related_products = self.model.objects.order_by(
                    '-sold'
                ).filter(category=category)
            else:
                if not self.model_category.objects.filter(parent=category).exists():
                    related_products = self.model.objects.order_by(
                        '-sold'
                    ).filter(category=category)

                else:
                    categories = self.model_category.objects.filter(
                        parent=category)
                    filtered_categories = [category]

                    for cat in categories:
                        filtered_categories.append(cat)

                    filtered_categories = tuple(filtered_categories)
                    related_products = self.model.objects.order_by(
                        '-sold'
                    ).filter(category__in=filtered_categories)

            # Excluir producto que estamos viendo
            related_products = related_products.exclude(id=product_id)
            related_products = self.serializer_class(
                related_products, many=True)

            if len(related_products.data) > 3:
                return Response(
                    {'related_products': related_products.data[:3]},
                    status=status.HTTP_200_OK)
            elif len(related_products.data) > 0:
                return Response(
                    {'related_products': related_products.data},
                    status=status.HTTP_200_OK)
            else:
                return Response(
                    {'error': 'No related products found'},
                    status=status.HTTP_200_OK)

        else:
            return Response(
                {'error': 'No related products found'},
                status=status.HTTP_200_OK)

    @action(detail=False, methods=['POST'], url_name='by_search',
            url_path='by/search')
    def list_by_search(self, request, pk=None):
        data = self.request.data

        try:
            category_id = int(data['category_id'])
        except:
            return Response(
                {'error': 'self.model_category ID must be an integer'},
                status=status.HTTP_404_NOT_FOUND)

        price_range = data['price_range']
        sort_by = data['sort_by']

        if not (sort_by == 'date_created' or sort_by == 'price' or sort_by == 'sold' or sort_by == 'name'):
            sort_by = 'date_created'

        order = data['order']

        # Si categoryID es = 0, filtrar todas las categorias
        if category_id == 0:
            product_results = self.model.objects.all()
        elif not self.model_category.objects.filter(id=category_id).exists():
            return Response(
                {'error': 'This category does not exist'},
                status=status.HTTP_404_NOT_FOUND)
        else:
            category = self.model_category.objects.get(id=category_id)
            if category.parent:
                # Si la categoria tiene padrem filtrar solo por la categoria y no el padre tambien
                product_results = self.model.objects.filter(category=category)
            else:
                if not self.model_category.objects.filter(parent=category).exists():
                    product_results = self.model.objects.filter(
                        category=category)
                else:
                    categories = self.model_category.objects.filter(
                        parent=category)
                    filtered_categories = [category]

                    for cat in categories:
                        filtered_categories.append(cat)

                    filtered_categories = tuple(filtered_categories)
                    product_results = self.model.objects.filter(
                        category__in=filtered_categories)

        # Filtrar por precio
        if price_range == '1 - 19':
            product_results = product_results.filter(price__gte=1)
            product_results = product_results.filter(price__lt=20)
        elif price_range == '20 - 39':
            product_results = product_results.filter(price__gte=20)
            product_results = product_results.filter(price__lt=40)
        elif price_range == '40 - 59':
            product_results = product_results.filter(price__gte=40)
            product_results = product_results.filter(price__lt=60)
        elif price_range == '60 - 79':
            product_results = product_results.filter(price__gte=60)
            product_results = product_results.filter(price__lt=80)
        elif price_range == 'More than 80':
            product_results = product_results.filter(price__gte=80)

        # Filtrar producto por sort_by
        if order == 'desc':
            sort_by = '-' + sort_by
            product_results = product_results.order_by(sort_by)
        elif order == 'asc':
            product_results = product_results.order_by(sort_by)
        else:
            product_results = product_results.order_by(sort_by)

        product_results = self.serializer_class(product_results, many=True)

        if len(product_results.data) > 0:
            return Response(
                {'filtered_products': product_results.data},
                status=status.HTTP_200_OK)
        else:
            return Response(
                {'error': 'No products found'},
                status=status.HTTP_200_OK)
