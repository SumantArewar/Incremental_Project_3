import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  movieform=this.fb.group({
      username:['Username is required', Validators.required],
      password:['Password is required', Validators.required],
    
    })
  ngOnInit(): void {
  }

}
