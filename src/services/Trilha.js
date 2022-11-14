import { api } from "./api";


export class Trilha { 

  static async get(id){
    const res = await api.get('trilhas');
    return res;
  }

}