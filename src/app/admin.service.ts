import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Admin } from '../model/admin';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  // link serve:
  private adminURL = "http://localhost:3000/admin";

  getData(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.adminURL).pipe(
      tap(receive => console.log(`receive = ${JSON.stringify(receive)}`)),
      catchError(error => of(([])))
    );
  }

}
