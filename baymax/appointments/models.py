from django.db import models
from django.conf import settings

class Appointment(models.Model):
    doctor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='doctor_appointments')
    patient = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='patient_appointments')
    date = models.DateField()
    time = models.TimeField()
    symptoms = models.TextField()
    status = models.CharField(
        max_length=20,
        choices=[('Pending', 'Pending'), ('Confirmed', 'Confirmed'), ('Cancelled', 'Cancelled')],
        default='Pending'
    )

    def __str__(self):
        return f'{self.patient.username} with {self.doctor.username} on {self.date} at {self.time}'
