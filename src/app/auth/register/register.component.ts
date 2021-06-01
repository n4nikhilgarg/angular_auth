import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authSevice : AuthService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.signup = this._formBuilder.group({
      full_name: ['Eve', Validators.required,],
      email: ['eve.holt@reqres.in',  [Validators.required, Validators.email]],
      password: ['pistol', Validators.required,],
    });
  }

  submit(){
    this._authSevice.register(this.signup.value).subscribe(
      res => {
        if(!res.error){
          localStorage.setItem('token', res.token);
          this._router.navigate(['/home']);
        }
      }
    );
  }

}
