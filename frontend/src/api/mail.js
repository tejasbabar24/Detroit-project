import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api/mail', // Your backend URL
  withCredentials: true, // Ensure cookies are sent
});

export const sendMail = async (data) => API.post('/sendmail', data);
