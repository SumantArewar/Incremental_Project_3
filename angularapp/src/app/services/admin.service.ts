import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  // tdata : Team
  // playerdata : Player

  // newTeam: Team = { id: 3, name: 'New Team', maximumBudget: 50000 };

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
  getPlayer(id:number):Observable<Player>
  {
    return this.httpclient.get<Player>(this.url + '/ShowPlayers/' + id)
  }

  httpoptions = {headers : new HttpHeaders({'content-type' : 'application/json'})}
  
  addPlayer(playerdata : Player) : Observable<Player>
  {
    return this.httpclient.post<Player>(this.url + '/AddPlayer' , playerdata , this.httpoptions)
  }
  editPlayer(playerdata : Player) : Observable<Player>
  {
    return this.httpclient.put<Player>(this.url + '/EditPlayer/' + playerdata.id , playerdata , this.httpoptions )
  }
  deletePlayer(id : number) : Observable<Player>
  {
    return this.httpclient.delete<Player>(this.url + '/DeletePlayer/' + id)
  }
}
