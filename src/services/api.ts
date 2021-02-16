import axios from 'axios';

const api = axios.create({
  baseURL: process.env.GOBARBER_API_URL,
});

export default api;
