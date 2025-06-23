import React, { useEffect, useState } from 'react';
import API from '../Api';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    API.get('appointments/')
      .then(res => setAppointments(res.data))
      .catch(() => alert('Failed to fetch appointments.'));
  }, []);

  return (
    <div>
      <h2>My Appointments</h2>
      <ul>
        {appointments.map(app => (
         <li key={app.id}>
  Doctor: {app.doctor}, Date: {app.date}, Time: {app.time}, Status: {app.status},Symptoms: {app.symptoms}, Patient: {app.patient}
</li>
        ))}
      </ul>
    </div>
  );
};

export default MyAppointments;
