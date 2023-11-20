import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/models/player';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  playerdata : Player = {id:0 ,name:'',age:0, category :'',biddingprice:0}

  constructor(private ad : AdminService , private route : Router) { }

  savedata(player : Player) : void {
    this.playerdata = player
    this.ad.getPlayers(this.playerdata).subscribe(
      () => {
        alert("Record Added Successfully")
        this.route.navigate(['/ShowPlayers'])
      }
    )
  }
  ngOnInit(): void {
  }

}
