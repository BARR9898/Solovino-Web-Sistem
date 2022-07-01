import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  URL = 'http://localhost:4000/posts'
  constructor(
    private http : HttpClient
  ) { }


  getAllPosts(){
    return this.http.get(this.URL)
  }

  getPost(id:string){
    return this.http.get(this.URL + '/' + id)
  }

  createPost(name_pet:string,age_pet:string,race_pet:string,sex_pet:string,description_pet:string,
    place_disapparence:string,date_disapparence:string,image:File){
      const fd = new FormData();
      fd.append('name_pet',name_pet);
      fd.append('age_pet',age_pet);
      fd.append('race_pet',race_pet);
      fd.append('sex_pet',sex_pet);
      fd.append('description_pet',description_pet);
      fd.append('place_disapparence',place_disapparence);
      fd.append('date_disapparence',date_disapparence);
      fd.append('image',image)

    return this.http.post(this.URL,fd)
  }

  deletePost(id:string){
    return  this.http.delete(this.URL + '/' + id)
  }

  updatePost(
    id:string,
    name_pet:string,
    age_pet:string,
    race_pet:string,
    sex_pet:string,
    description_pet:string,
    place_disapparence:string,
    date_disapparence:string,
    image:File){
      const fd = new FormData();
      fd.append('name_pet',name_pet);
      fd.append('age_pet',age_pet);
      fd.append('race_pet',race_pet);
      fd.append('sex_pet',sex_pet);
      fd.append('description_pet',description_pet);
      fd.append('place_disapparence',place_disapparence);
      fd.append('date_disapparence',date_disapparence);
      fd.append('image',image)

    return this.http.put(this.URL + "/" + id,fd)
  }

}
