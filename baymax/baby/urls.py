from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import (
    RegisterView, DoctorRegisterView, PatientRegisterView,
    DoctorSuggestionView, DoctorListView
)
from .views import UserProfileView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', UserProfileView.as_view(), name='user_profile'),
    path('register/', RegisterView.as_view()),
    path('register/doctor/', DoctorRegisterView.as_view()),
    path('register/patient/', PatientRegisterView.as_view()),
    path('suggest-doctors/', DoctorSuggestionView.as_view()),
    path('doctors/', DoctorListView.as_view()),

]
