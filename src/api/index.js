import axios from 'axios';
import { BASE_URL } from '../config';

const http = axios.create({
  baseURL: `http://localhost:3000/api`,
});

export const getTasks = () => http.get(`/tasks`);

export const createTask = (...task) => http.post(`/tasks`, task);

export const deleteTask = ({ id } = {}) => http.delete(`/tasks/${id}`);

export default http;
