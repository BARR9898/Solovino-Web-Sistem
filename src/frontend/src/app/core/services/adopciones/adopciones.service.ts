import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Adopcion } from '../../models/adopcion';
@Injectable({
  providedIn: 'root'
})
export class AdopcionesService {


  URL = 'https://solovinoapi.herokuapp.com/adopciones/'
  constructor(
    private http : HttpClient
  ) { }


  getAllAdoptions(){
    return this.http.get(this.URL)
  }

  getAdoption(id:string){
    return this.http.get(this.URL + '/' + id)
  }

  createAdoption(name_pet:string,
    age_pet:string,race_pet:string,sex_pet:string,
    sterulization_pet:string,description_pet:string,
    is_exsolovino:string,title:string
    ,image:File){
      const fd = new FormData()
      fd.append('name_pet',name_pet),
      fd.append('age_pet',age_pet),
      fd.append('race_pet',race_pet),
      fd.append('sex_pet',sex_pet),
      fd.append('sterulization_pet',sterulization_pet),
      fd.append('description_pet',description_pet),
      fd.append('is_exsolovino',is_exsolovino),
      fd.append('title',title),
      fd.append('image',image)
      return this.http.post(this.URL,fd)
  }

  deleteAdoption(id:string){
    return  this.http.delete(this.URL + '/' + id)
  }

  updatePet(id:string,name_pet:string,
    age_pet:string,race_pet:string,sex_pet:string,
    sterulization_pet:string,description_pet:string,
    is_exsolovino:string,title:string
    ,image:File){
      const fd = new FormData();
      fd.append('name_pet',name_pet),
      fd.append('age_pet',age_pet),
      fd.append('race_pet',race_pet),
      fd.append('sex_pet',sex_pet),
      fd.append('sterulization_pet',sterulization_pet),
      fd.append('description_pet',description_pet),
      fd.append('is_exsolovino',is_exsolovino),
      fd.append('image',image)
      return this.http.put(this.URL + '/' + id , fd)
  }
}
