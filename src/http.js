import axios from 'axios';

const createApiService = ({
  priority, method = 'get', endpoint, options,
}) => {
  const API_BASE_URL = priority || 'https://api.openalliance.ng/api';
  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,

  });
  switch (method) {
    case 'post':
      return (params) => axiosInstance.post(endpoint, params, options);
    case 'put':
      return (params) => axiosInstance.put(endpoint, params, options);
    case 'delete':
      return (params) => axiosInstance.delete(endpoint, options);
    default: return () => axiosInstance.get(endpoint, options);
  }
};

export default createApiService;
