import React, { useEffect, useState } from 'react';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/users/doctors/')  // Replace with your actual API URL
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch doctors');
        }
        return response.json();
      })
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading doctors...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Doctor List</h2>
      {doctors.length === 0 ? (
        <p>No doctors found.</p>
      ) : (
        doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card" style={styles.card}>
            <h3>Dr. {doctor.username}</h3>
            <p><strong>Email:</strong> {doctor.email}</p>
            <p><strong>ID:</strong> {doctor.id}</p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '10px',
  }
};

export default DoctorList;
