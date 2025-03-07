import axios from 'axios';

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/mail`, // Your backend URL
  withCredentials: true, // Ensure cookies are sent
});

export const sendMail = async (data) => API.post('/sendmail', data);
