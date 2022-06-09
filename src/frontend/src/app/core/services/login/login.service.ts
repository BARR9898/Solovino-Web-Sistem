import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from "../../../core/services/User/user";
import { User } from '../../../core/models/user.model'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public changeUserStatusSubject = new Subject<User>();
  public changeUserStatus$ = this.changeUserStatusSubject.asObservable();
  public urlUsuarioIngentaAcceder = '';
  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  user: User|any;
  readonly ISLOGGEDKEY = 'islogged';

  constructor(
    private userService: UserService,
    private router:Router) {
  }



  login(email: string, password: string):void {
    console.log(email,password)
    this.userService.existUser(email, password)
    .subscribe( res =>{
          console.log(res);
          if (res != null) {
            this.user = res;
            localStorage.setItem(this.ISLOGGEDKEY, 'true');
            this.changeLoginStatusSubject.next(true);
            this.changeUserStatusSubject.next(this.user);
            this.router.navigate(['/admin'])
            return true
          }
          return null
        },
        err => console.log(err)
      );

  }

  logout() {
    localStorage.removeItem(this.ISLOGGEDKEY);
    this.changeLoginStatusSubject.next(false);
    this.changeUserStatusSubject.next(null!);
    this.router.navigate(['/public'])
  }

  isLoggedIn() {
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
    console.log(isLogged);

    if (!isLogged) {
      console.log('isLogged es falso');

      //this.urlUsuarioIngentaAcceder = url;
      return false;
    }

    return true;
  }
}
