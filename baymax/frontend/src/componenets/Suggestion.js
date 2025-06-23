import React, { useState } from 'react';

const SuggestDoctors = () => {
  const [symptoms, setSymptoms] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/users/suggest-doctors/?symptoms=${encodeURIComponent(symptoms)}`);
      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText);
      }

      const data = await response.json();
      if (data.length === 0) {
        setError("No doctors found for the given symptoms.");
      } else {
        setError('');
      }

      setDoctors(data);
    } catch (err) {
      console.error("Error fetching doctors:", err);
      setError("An error occurred while fetching doctors.");
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Find Doctors Based on Your Symptoms</h2>

      <input
        type="text"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        placeholder="e.g. cough, fever, stomach pain"
        style={{ width: '300px', padding: '0.5rem' }}
      />
      <button onClick={handleSearch} style={{ marginLeft: '1rem' }}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {doctors.map((doc, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
          <h3>Dr. {doc.username}</h3>
          <p>Email: {doc.email}</p>
          <p>Specialization: {doc.specialization}</p>
          <p>Bio: {doc.bio}</p>
          <p>Available Days: {doc.available_days}</p>
          <p>Available From: {doc.available_time_start} to {doc.available_time_end}</p>
        </div>
      ))}
    </div>
  );
};

export default SuggestDoctors;
