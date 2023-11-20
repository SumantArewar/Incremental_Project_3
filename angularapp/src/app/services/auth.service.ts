import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(admin : string, password:string) : Observable<{role : string;}>{
    return of ({role : 'ADMIN'});
  }
}
