import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './http/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  constructor(
    private router: Router,
    private authService: AuthService) {}

  public handleServerError(err: any){
    if(err.statusText === "Unknown Error"){
      alert("An unknown error has occurred.");
      return;
    }
    else {
      alert(err.error.Message);
    }

    this.authService.logoutUser();
    this.router.navigateByUrl("home");
  }
}
