import axios from "axios";
import url from './url';

const api = axios.create({
    baseURL: url
});

export default api;