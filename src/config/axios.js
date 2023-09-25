// src/axios.js

import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'; // Cambia la URL a tu servidor Laravel

// Exporta el cliente Axios configurado
export default axios;
