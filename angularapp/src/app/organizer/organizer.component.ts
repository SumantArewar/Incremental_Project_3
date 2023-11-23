import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Player } from '../../models/player';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  constructor(private ad : AdminService , private route : Router , private ar : ActivatedRoute) { }

  playerdata : Player = {id:0 ,name:'',age:0, category :'',biddingPrice:0}
  id : number

  ngOnInit() {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.getPlayer(this.id)
  }

  getPlayer(id:number)
  {
    this.ad.getPlayer(id).subscribe((data :Player) => this.playerdata = data)
  }
  saveData(movie : Player)
  {
    this.ad.editPlayer(this.playerdata).subscribe(() => {
      alert("Record Edited")
      this.route.navigate(['/organizer'])
    })
  }
}
