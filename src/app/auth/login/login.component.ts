import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authSevice : AuthService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.login = this._formBuilder.group({
      email: ['eve.holt@reqres.in',  [Validators.required, Validators.email]],
      password: ['pistol', Validators.required,],
    });
  }

  submit(){
    this._authSevice.register(this.login.value).subscribe(
      res => {
        if(!res.error){
          localStorage.setItem('token', res.token);
          this._router.navigate(['/home']);
        }
      }
    );
  }

}
