import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

API.interceptors.request.use(
  config => {
    // Just skip setting the Authorization header
    return config;
  },
  error => Promise.reject(error)
);

export default API;
