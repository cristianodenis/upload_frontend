import axios from 'axios';

const api = axios.create({
    //10.0.2.2
    baseURL: process.env.REACT_APP_API_URL
    //baseURL: "https://deploy-backend-tarefas.herokuapp.com"
    
});

export default api;