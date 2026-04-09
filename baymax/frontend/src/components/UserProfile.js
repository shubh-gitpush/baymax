import React, { useEffect, useState } from 'react';
import API from '../Api';

function UserProfile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await API.get('users/profile/');
      const data = res.data;
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
