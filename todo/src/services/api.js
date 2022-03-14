import axios from 'axios';

const api = axios.create({
   
    baseURL: "https://deploy-backend-tarefas.herokuapp.com"
    
});

export default api;