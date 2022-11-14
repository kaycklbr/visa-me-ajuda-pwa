import Axios from "axios";


export const api = Axios.create({
  baseURL: 'https://services.novoenvio.com.br/fluxos',
  // headers: {
  //   'ngrok-skip-browser-warning': true
  // },
});