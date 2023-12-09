import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  isValid : boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder
  )
  {}

  ngOninit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
   
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if(username==="gaurav" && password === "12"){
    }
    else{
    }

    const up = { username, password };

    console.log('form submited');
    console.log(username, password);

    console.log('=====login data====', JSON.stringify(up));
  }
}
