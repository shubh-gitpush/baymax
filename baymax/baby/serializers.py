from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import DoctorProfile, PatientProfile

User = get_user_model()

class DoctorProfileSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source='user.id', read_only=True)
    username = serializers.CharField(source='user.username', read_only=True)
    email = serializers.EmailField(source='user.email', read_only=True)
    #written above because they are in user models and below class meta is in doctorprofile models

    class Meta:
        model = DoctorProfile
        fields = ['id', 'username', 'email', 'specialization', 'bio', 'available_days', 'available_time_start', 'available_time_end']


class PatientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientProfile
        fields = ['age', 'gender', 'medical_history']


class PatientRegisterSerializer(serializers.ModelSerializer):
    patient_profile = PatientProfileSerializer(source='patientprofile')
    #used because user and patientprofile are different so when ypu send data to backend thry should go in their respective table

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'is_patient', 'patient_profile']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('patientprofile')  # matches source
        validated_data['is_patient'] = True
        user = User.objects.create_user(**validated_data)
        PatientProfile.objects.create(user=user, **profile_data)
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_doctor', 'is_patient']


class UserRegistrationSerializer(serializers.ModelSerializer):
    doctor_profile = DoctorProfileSerializer(required=False)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'is_doctor', 'is_patient', 'doctor_profile']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        doctor_data = validated_data.pop('doctor_profile', None)
        user = User.objects.create_user(**validated_data)
        if doctor_data and validated_data.get('is_doctor'):
            DoctorProfile.objects.create(user=user, **doctor_data)
        return user


class DoctorRegistrationSerializer(serializers.ModelSerializer):
    doctor_profile = DoctorProfileSerializer(source='doctorprofile')

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'is_doctor', 'doctor_profile']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        doctor_data = validated_data.pop('doctorprofile')
        validated_data['is_doctor'] = True
        user = User.objects.create_user(**validated_data)
        DoctorProfile.objects.create(user=user, **doctor_data)
        return user


class PatientRegistrationSerializer(serializers.ModelSerializer):
    patient_profile = PatientProfileSerializer(source='patientprofile')

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'is_patient', 'patient_profile']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('patientprofile')
        validated_data['is_patient'] = True
        user = User.objects.create_user(**validated_data)
        PatientProfile.objects.create(user=user, **profile_data)
        return user
