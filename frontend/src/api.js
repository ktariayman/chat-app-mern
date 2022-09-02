import axios from 'axios';
import { logout } from './helper/auth';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 1000,
})

apiClient.interceptors.request.use((config) => {
  const user = localStorage.getItem('user');
  if( user){
    const token= JSON.parse(user).token;
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (err) => {
    return Promise.reject(err)
})

export const login = async (data) => {
    try {
      return await apiClient.post("/auth/login", data);
    } catch (exception) {
      return {
        error: true,
        exception,
      };
    }
  };
  
  export const register = async (data) => {
    try {
      return await apiClient.post("/auth/register", data);
    } catch (exception) {
      return {
        error: true,
        exception,
      };
    }
  };

  // secure routes 

  const checkResponseCode = (exception) =>{
    const responseCode = exception?.response?.status;
    if(responseCode){
      if(responseCode ===401 || responseCode ===403 ) {
        logout()
      }
    }
  }