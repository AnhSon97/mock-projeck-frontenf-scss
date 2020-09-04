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
  fakeAD: Admin =  {email: "anhson", pass: "123"};
  inputAdmin: Admin = this.loginComponent.admin;


  ngOnInit(): void {
    this.adminService.getData().subscribe(i => this.admin = i);
  }

  findAdmin(): boolean{
    return this.isEqual(this.inputAdmin, this.fakeAD);
  }

  isEqual(objA: Admin, objB: Admin) {
    // Tạo các mảng chứa tên các property
    var aProps = Object.getOwnPropertyNames(objA);
    var bProps = Object.getOwnPropertyNames(objB);
    // Nếu độ dài của mảng không bằng nhau,
    // thì 2 objects đó không bằnh nhau.
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
         var propName = aProps[i];
          // Nếu giá trị của cùng một property mà không bằng nhau,
          // thì 2 objects không bằng nhau.
         if (objA[propName] !== objB[propName]) {
             return false;
         }
    }
    // Nếu code chạy đến đây,
    // tức là 2 objects được tính lằ bằng nhau.
    return true;
    }
}
