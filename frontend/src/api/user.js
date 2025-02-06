import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/user', // Your backend URL
  withCredentials: true, // Ensure cookies are sent
});

// User registration
export const register = async (data) => API.post('/register', data);

// User login
export const login = async (data) => API.post('/login', data);

// User logout
export const logout = async () => API.post('/logout');

// Get user info
export const getUser = async () => API.get('/current-user');
