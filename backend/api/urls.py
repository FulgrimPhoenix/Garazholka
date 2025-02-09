from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import MyUserViewSet

router = DefaultRouter()
router.register(r'users', MyUserViewSet, basename='user')

urlpatterns = [
    path('auth/', include('djoser.urls.authtoken')),
    path('', include(router.urls)),
]
