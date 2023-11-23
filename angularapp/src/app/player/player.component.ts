import { Component, OnInit } from '@angular/core';
import { Player } from 'src/models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players : Player[] = []
  // player = { id: 1, name: 'Test Player', age: 25, category: 'Category A', biddingPrice: 100 };  
  newPlayer  = {biddingPrice : 200};

  constructor() { }

  ngOnInit(): void {
  }

}
