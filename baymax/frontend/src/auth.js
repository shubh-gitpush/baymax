import API from './Api';

export const loginUser = async (username, password) => {
  const response = await API.post('users/login/', {
    username,
    password,
  });
  localStorage.setItem('access_token', response.data.access);
  localStorage.setItem('refresh_token', response.data.refresh);
  return response.data;
};
