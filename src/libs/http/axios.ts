import $axios from 'axios';

export const axios = $axios.create();

axios.defaults.headers.post['Content-Type'] =
  'multipart/form-data';
axios.defaults.baseURL = 'http://localhost:8000/api/v1';