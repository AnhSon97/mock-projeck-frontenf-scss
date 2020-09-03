import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap, retry } from 'rxjs/operators';
import { of } from 'rxjs';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})

export class AccountService {


  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  // link serve:
  private accountURL = " http://localhost:3000/account";

  getData(): Observable<Account[]> {
    return this.http.get<Account[]>(this.accountURL).pipe(
      tap(receive => console.log(`receive = ${JSON.stringify(receive)}`)),
      catchError(error => of(([])))
    );
  }

  getDataFromId(id: number): Observable<Account> {
    const urlGetById = `${this.accountURL}/${id}`;
    return this.http.get<Account>(urlGetById).pipe(
      tap(selected => console.log(`selected = ${JSON.stringify(selected)}`)),
      catchError(error => of(new Account()))
    )
  }

  updateData(account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.accountURL}/${account.id}`, account, this.httpOptions).pipe(
      tap(update => console.log(`update = ${JSON.stringify(update)}`)),
      catchError(error => of(account))
    )
  }

  addData(newaccount: Account): Observable<Account> {
    return this.http.post<Account>(this.accountURL, newaccount, this.httpOptions).pipe(
      tap((movie: Account) => console.log()),
      catchError(error => of(new Account()))
    )
  }

  deleteData(id: number) {
    const urlGetById = `${this.accountURL}/${id}`;
    return this.http.delete<Account>(urlGetById).pipe(
      tap(deleted => console.log(`deleted = ${JSON.stringify(deleted)}`)),
      catchError(error => of(null))
    )
  }
}
