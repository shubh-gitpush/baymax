import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('access');
      const res = await fetch('http://127.0.0.1:8000/api/users/profile/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <p>Is Doctor: {profile.is_doctor ? 'Yes' : 'No'}</p>
      <p>Is Patient: {profile.is_patient ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default UserProfile;
