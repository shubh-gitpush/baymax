import React, { useState } from 'react';

function DoctorRegister() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    doctor_profile: {
      specialization: '',
      bio: '',
      available_days: '',
      available_time_start: '',
      available_time_end: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.doctor_profile) {
      setFormData(prev => ({
        ...prev,
        doctor_profile: { ...prev.doctor_profile, [name]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/users/register/doctor/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, is_doctor: true })
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h2>Doctor Registration</h2>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <input name="specialization" placeholder="Specialization" onChange={handleChange} />
      <input name="bio" placeholder="Bio" onChange={handleChange} />
      <input name="available_days" placeholder="Available Days" onChange={handleChange} />
      <input name="available_time_start" placeholder="Start Time (HH:MM)" onChange={handleChange} />
      <input name="available_time_end" placeholder="End Time (HH:MM)" onChange={handleChange} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default DoctorRegister;
