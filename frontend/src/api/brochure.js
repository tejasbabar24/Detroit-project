import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/brochure', // Your backend URL
  withCredentials: true, // Ensure cookies are sent
});

export const addBrochure = async (data) => API.post('/add', data);
export const deleteBrochure = async (id) => API.delete(`/${id}`);
export const getBrochures = async () => API.get('/');