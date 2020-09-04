import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) { }


  canActivate() {
    if (this.authService.findAdmin()) {
      return true;
    } else {
      alert("sai mật khẩu hoặc email")
      return false;
    }
  }

}
