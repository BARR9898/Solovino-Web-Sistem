import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adopcion } from '../../models/adopcion';
@Injectable({
  providedIn: 'root'
})
export class AdopcionesService {


  URL = 'http://localhost:4000/adopciones'
  constructor(
    private http : HttpClient
  ) { }


  getAllAdoptions(){
    return this.http.get(this.URL)
  }

  getAdoption(id:string){
    return this.http.get(this.URL + '/' + id)
  }

  createAdoption(adopcion:Adopcion){
    return this.http.post(this.URL,adopcion)
  }

  deleteAdoption(id:string){
    return  this.http.delete(this.URL + '/' + id)
  }

  updatePet(id:string,adoption:Adopcion){
    return this.http.put(this.URL + '/' + id , adoption)
  }
}
