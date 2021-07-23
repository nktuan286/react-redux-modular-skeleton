import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

axios.interceptors.request.use(
  async function (config) {
    config.headers = {};
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default {
  axios,
  get: async (config) => {
    const { path, axiosConfig } = config;
    return await axios.get(`${REACT_APP_API_URI}/${path}`, { ...axiosConfig });
  },
  post: async (config) => {
    const { path, data } = config;
    return await axios.post(`${REACT_APP_API_URI}/${path}`, data);
  },
  delete: async (config) => {
    const { path, data } = config;
    return await axios.delete(`${REACT_APP_API_URI}/${path}`, data);
  }
};
