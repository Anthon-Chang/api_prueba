import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Example interceptor (can be extended for auth)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optionally centralize error handling here
    return Promise.reject(error);
  }
);

export default apiClient;
