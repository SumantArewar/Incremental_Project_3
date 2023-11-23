import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players : Player[] = []
  // player = { id: 1, name: 'Test Player', age: 25, category: 'Category A', biddingPrice: 100 };  
  newPlayer  = {biddingPrice : 200};

  // players : any[] = []
  constructor(private ad : AdminService  , private at : AuthService , private router : Router) 
  {
    this.ad.getPlayers().subscribe(data => {this.players.push(...data)})
    console.log(this.players)
  }
  ngOnInit(): void {
  }

}
