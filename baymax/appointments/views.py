from rest_framework import viewsets
from rest_framework import generics
from .models import Appointment
from .serializers import AppointmentSerializer
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.decorators import action

class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        serializer.save()  # You can add patient=self.request.user if needed

    @action(detail=False, methods=['get'])
    def all(self, request):
        appointments = Appointment.objects.all()
        serializer = self.get_serializer(appointments, many=True)
        return Response(serializer.data)
class AppointmentCreateView(generics.CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer