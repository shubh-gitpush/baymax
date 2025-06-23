from django.db import models
from django.contrib.auth.models import AbstractUser

# Extend the built-in User model
class User(AbstractUser):
    is_doctor = models.BooleanField(default=False)
    is_patient = models.BooleanField(default=True)

class DoctorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    specialization = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    available_days = models.CharField(max_length=100)  # e.g., 'Mon,Tue,Wed'
    available_time_start = models.TimeField()
    available_time_end = models.TimeField()

    def __str__(self):
        return self.user.get_full_name()

class PatientProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.PositiveIntegerField(null=True, blank=True)
    gender = models.CharField(max_length=10, choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')])
    medical_history = models.TextField(blank=True)

    def __str__(self):
        return self.user.get_full_name()
