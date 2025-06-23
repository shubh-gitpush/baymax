from rest_framework import serializers
from .models import Appointment
from django.contrib.auth import get_user_model

User = get_user_model()

class AppointmentSerializer(serializers.ModelSerializer):
    doctor = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.filter(is_doctor=True))
    #slugfield to represent stringlike e=neame,email,passowrd etc instead of numbers
    patient = serializers.SlugRelatedField(slug_field='username', queryset=User.objects.filter(is_patient=True))

    class Meta:
        model = Appointment
        fields = ['id', 'doctor', 'patient', 'date', 'time', 'symptoms', 'status']
