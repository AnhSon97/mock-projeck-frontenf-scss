import { Component, OnInit } from '@angular/core';
import { Admin } from '../../model/admin';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public admin: Admin = {email: "anhson", pass: "123"}

  constructor() { }

  ngOnInit(): void {
  }

}
