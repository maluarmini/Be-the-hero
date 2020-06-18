// cliente http
// responsável por fazer as chamadas ao nosso back-end e obter as repostas
// AXIOS
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333',
})
export default api;
