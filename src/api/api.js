import axios from "axios";

const apiURL = {
  development: "http://localhost:8080",
  production: "LINK DO SERVER DEPLOYADO VAI AQUI",
};

const api = axios.create({ baseURL: apiURL[process.env.NODE_ENV] });

api.interceptors.request.use((config) => {
  // capturar o usuário logado -> localStorage (armazenamento local)
  const loggedUserJSON = localStorage.getItem("loggedUser");
  // transformar em objeto
  const loggedUserObj = JSON.parse(loggedUserJSON || '""');

  // retirar a informação do token -> autorização
  if (loggedUserObj.token) {
    // Authorization: Bearer 453fasaJfe.
    config.headers = { Authorization: `Bearer ${loggedUserObj.token}` };
  }

  return config;
});

export default api;
