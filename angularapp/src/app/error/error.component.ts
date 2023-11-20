import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/models/player';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  playerdata : Player
  id : number 

  constructor(private ms : AdminService , private ar : ActivatedRoute , private route : Router) { }

  ngOnInit() 
  {
    const tid = this.ar.snapshot.paramMap.get('id')
    this.id = Number(tid)
    this.ms.getPlayer(this.id).subscribe((data : Player) =>{
      this.playerdata = data
    })
  }
  deleteData(id :number)
  {
    this.id = id
    this.ms.deletePlayer(this.id).subscribe(()=>{
      alert("Record Deleted")
      this.route.navigate(['/listmovies'])
    })
  }

  

}
