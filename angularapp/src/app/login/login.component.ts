import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = 'admin'
  password : string = 'password'

  constructor(private fb : FormBuilder) { }
  movieform=this.fb.group({
    username:['Username is required', Validators.required],
    password:['Password is required', Validators.required]
  })
  login(){}

  ngOnInit(): void {
  }

}
