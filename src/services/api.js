import Axios from "axios";


export const api = Axios.create({
  baseURL: 'https://b0b1-177-136-3-162.sa.ngrok.io/fluxos',
  // headers: {
  //   'ngrok-skip-browser-warning': true
  // },
});