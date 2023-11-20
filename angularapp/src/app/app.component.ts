import { Component } from '@angular/core';

// import { Team } from './../models/team.model';
// import { Player } from '../../models/player.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  constructor(private router : Router){
  }
  login(){ 
    this.router.navigate(['/']);
    // return this.router.navigate(['/admin']);
  }
}
