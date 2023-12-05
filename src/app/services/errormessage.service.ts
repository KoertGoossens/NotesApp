import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './http/auth.service';
import { BehaviorSubject } from 'rxjs';
import { ErrorMessage } from '../models/errormessage';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  private errorMessageSubject = new BehaviorSubject<ErrorMessage | null>(null);
  errorMessage = this.errorMessageSubject.asObservable();

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  public handleServerError(err: any){
    const errorMessage: ErrorMessage = {
      StatusCode: err.error.StatusCode,
      Message: err.error.Message
    }

    this.errorMessageSubject.next(errorMessage);
    this.authService.logoutUser();
    this.router.navigateByUrl("error");
  }
}
