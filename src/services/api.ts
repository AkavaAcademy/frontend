import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  register: (userData: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    role?: string;
  }) => api.post('/auth/register', userData),
  
  me: () => api.get('/auth/me'),
};

export const coursesAPI = {
  getAll: (params?: { difficulty?: string; category?: string }) =>
    api.get('/api/courses', { params }),
  
  getById: (id: number) => api.get(`/api/courses/${id}`),
  
  create: (courseData: {
    title: string;
    description: string;
    duration: string;
    price: number;
    difficulty: string;
    category: string;
  }) => api.post('/api/courses', courseData),
  
  update: (id: number, courseData: any) =>
    api.put(`/api/courses/${id}`, courseData),
  
  delete: (id: number) => api.delete(`/api/courses/${id}`),
};

export const contactsAPI = {
  create: (contactData: {
    name: string;
    email: string;
    phone?: string;
    child_name?: string;
    child_age: number;
    message?: string;
    course?: string;
  }) => api.post('/api/contacts', { contact: contactData }),
  
  getAll: () => api.get('/api/contacts'),
  
  getById: (id: number) => api.get(`/api/contacts/${id}`),
};

export const blogsAPI = {
  getAll: () => api.get('/api/blogs'),
};

export default api; 