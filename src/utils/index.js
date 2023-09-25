import axios from 'axios';
const productionUrl = 'http://localhost:5000/';

const customFetch = axios.create({
  baseURL: productionUrl,
});

export default customFetch;
