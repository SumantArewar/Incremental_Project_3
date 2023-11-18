import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = ""
  // constructor() { }
  constructor(private httpclient : HttpClient) { }
  getTeams():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/ListMovies')
  }
  createTeams():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/ListMovies')
  }
  getPlayers():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.url + '/ListMovies')
  }
}
