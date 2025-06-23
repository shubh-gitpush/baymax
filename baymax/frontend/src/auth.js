// services/auth.js
import axios from 'axios';

export const loginUser = async (username, password) => {
  const response = await axios.post('http://127.0.0.1:8000/api/users/login/', {
    username,
    password,
  });
  localStorage.setItem('access_token', response.data.access);
  localStorage.setItem('refresh_token', response.data.refresh);
  return response.data;
};
