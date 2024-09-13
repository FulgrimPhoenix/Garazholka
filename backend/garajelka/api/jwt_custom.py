from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken


class TokenObtainPairCookieView(APIView):
    def post(self, request, *args, **kwargs):
        response = Response()
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            response.set_cookie(
                key='access_token',
                value=str(refresh.access_token),
                httponly=True,
                samesite='Lax'
            )
            response.set_cookie(
                key='refresh_token',
                value=str(refresh),
                httponly=True,
                samesite='Lax'
            )
            response.data = {
                'access': str(refresh.access_token),
                'refresh': str(refresh)
            }
            return response
        else:
            return Response(
                {"detail": "Invalid credentials"},
                status=status.HTTP_401_UNAUTHORIZED
            )


class TokenRefreshCookieView(APIView):
    def post(self, request, *args, **kwargs):
        response = Response()
        refresh_token = request.COOKIES.get('refresh_token')
        if refresh_token is None:
            return Response(
                {"detail": "Refresh token not found"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            refresh = RefreshToken(refresh_token)
            response.set_cookie(
                key='access_token',
                value=str(refresh.access_token),
                httponly=True,
                samesite='Lax'
            )
            response.data = {'access': str(refresh.access_token)}
            return response
        except Exception as e:
            return Response(
                {"detail": str(e)},
                status=status.HTTP_401_UNAUTHORIZED
            )
