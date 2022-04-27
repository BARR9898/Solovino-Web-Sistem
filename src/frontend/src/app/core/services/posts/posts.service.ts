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

  createPost(post:Posts){
    return this.http.post(this.URL,post)
  }

  deletePost(id:string){
    return  this.http.delete(this.URL + '/' + id)
  }

  updatePost(id:string,post:Posts){
    return this.http.put(this.URL + '/' + id ,post)
  }

}
