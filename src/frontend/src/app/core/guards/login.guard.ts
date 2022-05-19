import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  private constructor (
    private loginService :LoginService,
    private router :Router
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.loginService.isLoggedIn()){
        this.router.navigate(['/public/login'])
        return false;
      }else{
        return true;
      }
  }

}
