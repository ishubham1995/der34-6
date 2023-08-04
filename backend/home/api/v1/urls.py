from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import Swe23ViewSet,Swe23ViewSet,Swe23ViewSet,Swe23ViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('swe23', Swe23ViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
