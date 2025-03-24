from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import MyUserViewSet, GroupViewSet

router = DefaultRouter()
router.register(r'users', MyUserViewSet, basename='user')
router.register(r'groups', GroupViewSet, basename='group')

urlpatterns = [
    path('auth/', include('djoser.urls.authtoken')),
    path('', include(router.urls)),
]
