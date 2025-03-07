import axios from 'axios';

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/product`, // Your backend URL
  withCredentials: true, // Ensure cookies are sent
});

// User registration
export const addProduct = async (data) => API.post('/add', data);

// User login
export const deleteProduct = async (id) => API.delete(`/${id}`);

// Get user info
export const getProducts = async () => API.get('/');