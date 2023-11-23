import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { Player } from 'src/models/player';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = 'admin'
  password : string = 'password'
  // // role : 'ADMIN'
  
  // constructor(private fb : FormBuilder , private router :Router) {}
  
  // movieform=this.fb.group({
  //   username:['Username is required', Validators.required],
  //   password:['Password is required', Validators.required],
  
  // })
  // login(){ 
      // return this.router.navigate(['/admin']);
    // }

    
  players : any[] = []
  constructor(private ad : AdminService  , private at : AuthService , private router : Router) 
  {
    this.ad.getPlayers().subscribe(data => {this.players.push(...data)})
    console.log(this.players)
  }
  ngOnInit(): void {
  }
  // login(admin : string, password:string) : Observable<{role : string;}>{
  //   return of ({role : 'ADMIN'});
  // }
  login()
  {
    this.at.login(this.username , this.password).subscribe( user =>
      {
        this.router.navigate(['/admin'])
        this.router.navigate(['/organizer'])
      });
  }
}
