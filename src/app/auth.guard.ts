import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginComponent: LoginComponent) { }


  canActivate() {
    if (this.loginComponent.check()) {
      return true;
    } else {
      alert("sai mật khẩu hoặc email")
      return false;
    }
  }

}
