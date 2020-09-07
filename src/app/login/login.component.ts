import { Component, OnInit } from '@angular/core';
import { Admin } from '../../model/admin';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  inputAdmin: Admin = { email: "anhson", pass: "123" };

  listAdmin: Admin = { email: "anhson", pass: "123" };

  constructor() { }

  ngOnInit(): void {
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

  check(): boolean {
    return this.isEqual(this.inputAdmin, this.listAdmin)
  }

}
