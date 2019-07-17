import axios from 'axios'
const api = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://geren-corridas-api.herokuapp.com',
});
export default api;
