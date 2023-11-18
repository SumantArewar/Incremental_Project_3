import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  
  newPlayer : player = {biddingPrice : 200};

  constructor() { }

  ngOnInit(): void {
  }

}
