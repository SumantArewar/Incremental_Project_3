import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players = [{}]
  
  newPlayer  = {biddingPrice : 200};

  constructor() { }

  ngOnInit(): void {
  }

}
