import axios from 'axios';

const key = '9065506b';

const api = axios.create({
  baseURL: `https://www.omdbapi.com/?apikey=${key}`,
});

export default api;
