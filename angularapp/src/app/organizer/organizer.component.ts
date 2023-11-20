import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Player } from '../models/player';
@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  playerdata : any[] = []

  constructor(private ad : AdminService) 
  {
    this.ad.getPlayers().subscribe(data => {this.playerdata.push(...data)})
    console.log(this.playerdata)
  }

  ngOnInit(): void {
  }

}
