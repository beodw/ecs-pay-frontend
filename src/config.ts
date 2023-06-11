import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://161.35.170.95/api',
});

export default axiosInstance;