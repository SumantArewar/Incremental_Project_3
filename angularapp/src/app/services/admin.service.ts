import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { TeamModel} from '../../models/team.model';
// import { Player } from '../../models/player.model';
import { Team } from '../../models/team.model';
import { Router } from '@angular/router';
// import { Player } from '../models/player.model';
import { Player } from '../../models/player';
// import { Team } from '../../models/team';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  group(arg0: { username: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors))[]; password: (string | ((control: import("@angular/forms").AbstractControl) => import("@angular/forms").ValidationErrors))[]; }) {
    throw new Error('Method not implemented.');
  }
  tdata : Team
  playerdata : Player

  newTeam: Team = { id: 3, name: 'New Team', maximumBudget: 50000 };

  url = "https://8080-fdacafeaafabfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin"
  
  // constructor() { }
  constructor(private httpclient : HttpClient ) { }
  getTeams():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/ShowPlayers')
  }
  createTeam(newTeam : Team):Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/ListMovies')
  }
  getPlayers():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/ShowPlayers')
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
