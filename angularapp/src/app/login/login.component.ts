import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  movieform=this.fb.group({
    username:['Username is required', Validators.required],
    password:['Password is required', Validators.required]
  })

  ngOnInit(): void {
  }

}
