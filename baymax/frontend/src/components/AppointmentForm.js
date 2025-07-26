import React, { useEffect, useState } from 'react';
import API from '../Api';

const AppointmentForm = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [patient,setPatient]=useState('')

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await API.get('http://127.0.0.1:8000/api/users/suggest-doctors');
        console.log('Doctors fetched:', response.data);
        setDoctors(response.data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const [date, time] = dateTime.split('T');

    try {
      await API.post('http://127.0.0.1:8000/api/appointments/', {
        doctor: selectedDoctor,     // string username
  patient: patient,        // hardcoded for testing
  date: date,
  time: time,
  symptoms: symptoms,
  status: "Pending"
      });
      alert('Appointment created successfully!');
    } catch (error) {
      console.error(error);
      alert('Error booking appointment.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>

      <select value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} required>
        <option value="">Select a Doctor</option>
        {doctors.map((doc, idx) => (
         <option key={idx} value={doc.username}>
  Dr. {doc.username} ({doc.specialization})
</option>

        ))}
      </select>

      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        required
      />

      <textarea
        placeholder="Describe your symptoms"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        rows={4}
        required
      />
      <input type='text' value={patient} onChange={(e) => setPatient(e.target.value)} required/>

      <button type="submit">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
