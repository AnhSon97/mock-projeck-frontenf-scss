import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap, retry } from 'rxjs/operators';
import { of } from 'rxjs';
import { Group } from './../../model/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  // link serve:
  private groupURL = "http://localhost:3000/group";

  getData(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupURL).pipe(
      tap(receive => console.log(`receive = ${JSON.stringify(receive)}`)),
      catchError(error => of(([])))
    );
  }

  getDataFromId(id: number): Observable<Group> {
    const urlGetById = `${this.groupURL}/${id}`;
    return this.http.get<Group>(urlGetById).pipe(
      tap(selected => console.log(`selected = ${JSON.stringify(selected)}`)),
      catchError(error => of(new Group()))
    )
  }

  updateData(group: Group): Observable<Group> {
    return this.http.put<Group>(`${this.groupURL}/${group.id}`, group, this.httpOptions).pipe(
      tap(update => console.log(`update = ${JSON.stringify(update)}`)),
      catchError(error => of(group))
    )
  }

  addData(newgroup: Group): Observable<Group> {
    return this.http.post<Group>(this.groupURL, newgroup, this.httpOptions).pipe(
      tap((group: Group) => console.log()),
      catchError(error => of(new Group()))
    )
  }

  deleteData(id: number) {
    const urlGetById = `${this.groupURL}/${id}`;
    return this.http.delete<Group>(urlGetById).pipe(
      tap(deleted => console.log(`deleted = ${JSON.stringify(deleted)}`)),
      catchError(error => of(null))
    )
  }

}
