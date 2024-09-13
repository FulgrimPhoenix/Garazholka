from django.urls import path, include
from . import jwt_custom

urlpatterns = [
    path('v1/token/',
         jwt_custom.TokenObtainPairCookieView.as_view(),
         name='token_obtain_pair'),
    path('v1/token/refresh/',
         jwt_custom.TokenRefreshCookieView.as_view(),
         name='token_refresh'),
    path('v1/', include('djoser.urls')),
]
