import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/product', // Your backend URL
  withCredentials: true, // Ensure cookies are sent
});

// User registration
export const addProduct = async (data) => API.post('/add', data);

// User login
export const deleteProduct = async (data) => API.delete('/:id', data);

// Get user info
export const getProducts = async () => API.get('/');