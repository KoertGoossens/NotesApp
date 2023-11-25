import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './http/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const jwt = localStorage.getItem("authToken");

    if (jwt) {
      return true;
    }
    else {
      this.router.navigateByUrl("/home");
      return false;
    }
  }
}
