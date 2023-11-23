import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  playerdata : any[] = []
  constructor(private ad : AdminService  , private at : AuthService , private router : Router) 
  {
    this.ad.getPlayers().subscribe(data => {this.playerdata.push(...data)})
    console.log(this.playerdata)
  }
  ngOnInit(): void {
  }


}
