from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from .models import DoctorProfile
from .serializers import (
    UserRegistrationSerializer,
    UserSerializer,
    DoctorRegistrationSerializer,
    PatientRegistrationSerializer,
    DoctorProfileSerializer,

)

User = get_user_model()

# 1. Suggest doctors by symptoms
class DoctorSuggestionView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        symptoms = request.query_params.get('symptoms', '').lower()

        symptom_specialization_map = {
            'cough': 'Pulmonology',
            'fever': 'General Medicine',
            'skin': 'Dermatology',
            'heart': 'Cardiology',
            'stomach': 'Gastroenterology',
            'eye': 'Ophthalmology',
        }

        specialization = None
        for keyword, spec in symptom_specialization_map.items():
            if keyword in symptoms:
                specialization = spec
                break

        if specialization:
            doctors = DoctorProfile.objects.filter(specialization__icontains=specialization)
        else:
            doctors = DoctorProfile.objects.all()  # Show all if no match (optional)

        serializer = DoctorProfileSerializer(doctors, many=True)
        return Response(serializer.data)


# 2. Register Doctor
class DoctorRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = DoctorRegistrationSerializer
    permission_classes = [AllowAny]


# 3. Register Patient
class PatientRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = PatientRegistrationSerializer
    permission_classes = [AllowAny]


# 4. List all doctor profiles+
class DoctorListView(generics.ListAPIView):
    queryset = DoctorProfile.objects.all()
    serializer_class = DoctorProfileSerializer
    permission_classes = [AllowAny]


# 5. Book an appointment (open API)



# Optional: View logged-in user profile
class UserProfileView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        return self.request.user


# 6. General Registration (if needed)
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegistrationSerializer
    permission_classes = [AllowAny]
