import axios from 'axios';

import { getItem } from '../utils/localStorage';
const TOKEN = 'TOKEN';

const axiosApiInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use((config) => {
  const token = getItem(TOKEN);
  config.headers = {
    Authorization: `Bearer ${token}`,
  };
  return config;
});

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use((response) => {
  return response.data;
});
//   async function (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 403 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const access_token = await refreshAccessToken();
//       axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
//       return axiosApiInstance(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosApiInstance;
