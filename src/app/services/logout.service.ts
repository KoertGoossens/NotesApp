import { Injectable } from '@angular/core';
import { AuthService } from './http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  constructor(private authService: AuthService){}

  public logoutUser(){
    this.authService.logoutUser().subscribe({
      next: token => {
      },
      error: err => {
      }
    });

    this.logoutUserRemoveToken();
  }

  public logoutUserRemoveToken(){
    localStorage.removeItem("authToken");
  }
}
