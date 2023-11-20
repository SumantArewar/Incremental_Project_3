import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Team } from '../../models/team.model';
// import { Player } from '../../models/player.model';
// import { Team } from '../models/team.model';
import { Team } from '../models/team';
import { Router } from '@angular/router';
// import { Player } from '../models/player.model';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  tdata : Team
  pdata : Player

  newTeam: Team = { id: 3, name: 'New Team', maximumBudget: 50000 };

  url = ""
  // constructor() { }
  constructor(private httpclient : HttpClient , private route : Router) { }
  getTeams():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/ListMovies')
  }
  createTeam(newTeam : Team):Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/ListMovies')
  }
  getPlayers():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/ListMovies')
  }

  // saveData():void{
  //   this.tdata=this.movieform.value
  //   console.log(this.tdata)
  //   this.ar.addMovie(this.tdata).subscribe(
  //     ()=>{
  //       alert("Record Added")
  //       this.route.navigate(['/listmovies'])
  //     }
  //   )
  // }
}
