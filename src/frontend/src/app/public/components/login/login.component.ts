import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../core/services/login/login.service'
import { FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder) {

  }

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public routeRedirect = '';

  ngOnInit(): void {
  }

     login(){
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;
    console.log(email)
    console.log(password);
    this.loginService.login(email,password);








   }

  cancel(){
    this.loginService.logout();
    this.router.navigate([this.routeRedirect]);
  }


}
