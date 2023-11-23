import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "https://8080-fdacafeaafabfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin"
  constructor(private httpclient : HttpClient) { }

  login(admin : string, password:string) : Observable<{role : string;}>{
    return of ({role : 'ADMIN'});
  }

  register(username : string , password : string) : Observable<any>
  {
    const body = {username , password};
    return this.httpclient.post(`${this.url}/register` , body);
  }
}
