import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://participay-backend.herokuapp.com',
});

export default instance;
