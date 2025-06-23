import React, { useState, useEffect, useRef } from 'react';
import initAHole from './Hole'; // make sure this path is correct
import './Dashboard.css'; // reuse the styles with a-hole

function PatientRegister() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    patient_profile: {
      age: '',
      gender: '',
      medical_history: ''
    }
  });

  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && wrapperRef.current) {
      initAHole(canvasRef.current);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.patient_profile) {
      setFormData(prev => ({
        ...prev,
        patient_profile: { ...prev.patient_profile, [name]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/users/register/patient/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, is_patient: true })
    });
    const data = await response.json();
    console.log(data);

  };

  return (
    <div className="dashboard-wrapper">
      <a-hole ref={wrapperRef} className="a-hole-wrapper">
        <canvas ref={canvasRef} className="js-canvas a-hole-canvas" />
      </a-hole>
      <div className="dark-overlay" />
      <div
        className="overlay-content"
        style={{ position: 'relative', zIndex: 30, pointerEvents: 'auto', textAlign: 'center' }}
      >
        <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>
          Patient Registration
        </h2>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
          <option value="O">Other</option>
        </select>
        <input name="medical_history" placeholder="Medical History" onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}

export default PatientRegister;
