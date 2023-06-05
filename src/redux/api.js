import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://647c87b0c0bae2880ad0d2ec.mockapi.io/users',
});

export const getUsers = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const getUserById = async id => {
  const { data } = await instance.get(`/${id}`);
  return data;
};

export const patchUser = async user => {
  const { data } = await instance.patch(`/users/${user.id}`);
  return data;
};
