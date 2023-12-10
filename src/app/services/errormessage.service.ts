import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ErrorMessage } from '../models/errormessage';
import { LogoutService } from './logout.service';

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

  public handleServerError(err: any){
    const errorMessage: ErrorMessage = {
      StatusCode: err.error.StatusCode,
      Message: err.error.Message
    }

    this.errorMessageSubject.next(errorMessage);
    this.logoutService.logoutUser();
    this.router.navigateByUrl("error");
  }
}
