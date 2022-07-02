import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { User } from '../../models/user.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URI = 'https://solovinoapi.herokuapp.com//users';

  constructor(private httpClient: HttpClient) { }

  createUser(user:User){
   return this.httpClient.post(this.URI , user);
  }
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.URI)
  }

  existUser(email:string, password:string):Observable<User>{
    return this.httpClient.get<User>(this.URI+'/?email='+email+'&password='+password)
  }

  getUser(id:string){
    return this.httpClient.get<User>(this.URI + '/' + id);
  }

  deleteUser(id:string){
    return this.httpClient.delete(this.URI + '/' + id);
  }

  updateUser(id:string, username:string, email:string, password:string, role:number){
    return this.httpClient.put(this.URI + '/' +id, {username, email, password, role});
  }
}
