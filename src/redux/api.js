import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://647c87b0c0bae2880ad0d2ec.mockapi.io/users',
});

export const getUsers = async () => {
  const { data } = await instance.get('/');
  return data;
};
