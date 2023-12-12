import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ErrorMessage } from '../models/errormessage';
import { LogoutService } from './logout.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  private errorMessageSubject = new BehaviorSubject<ErrorMessage | null>(null);
  errorMessage = this.errorMessageSubject.asObservable();

  constructor(
    private router: Router,
    private logoutService: LogoutService
  ) {}

  public handleServerError(err: HttpErrorResponse){
    if(err.status === 404 || err.status === 409){
      if(err.error.Message === "Refresh token not found."){
        this.logoutService.logoutUserRemoveToken();
        this.router.navigateByUrl("login");
      }
      else {
        alert(err.error.Message);
      }
    }
    else{
      const errorMessage = new ErrorMessage();

      if(err.status === 0){
        errorMessage.StatusCode = 500;
        errorMessage.Message = "Could not connect to server.";
        this.logoutService.logoutUserRemoveToken();
      }
      else{
        errorMessage.StatusCode = err.error.StatusCode,
        errorMessage.Message = err.error.Message
  
        if(err.status === 500){
          this.logoutService.logoutUserRemoveToken();
        }
        else if(err.status === 400){
          this.logoutService.logoutUser();
        }
      }

      this.errorMessageSubject.next(errorMessage);
      this.router.navigateByUrl("error");
    }
  }
}
