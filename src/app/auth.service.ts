import { Injectable, OnInit } from '@angular/core';
import { Admin } from '../model/admin';
import { AdminService } from './admin.service';
import { LoginComponent } from './login/login.component';




@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  constructor(private adminService: AdminService, private loginComponent: LoginComponent) { }

  admin: Admin[];
  // fakeAD: Admin =  {email: "anhson", pass: "123"};
  // inputAdmin: Admin = this.loginComponent.admin;


  ngOnInit(): void {
    this.adminService.getData().subscribe(i => this.admin = i);
  }

  findAdmin(): boolean{
    return;
  }
  
}
