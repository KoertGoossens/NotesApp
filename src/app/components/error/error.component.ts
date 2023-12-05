import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMessageService } from 'src/app/services/errormessage.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  statusCode?: number = 404;
  errorMessage?: string = "An unknown error occurred.";

  constructor(
    private router: Router,
    private errorMessageService: ErrorMessageService
  ) {}

  ngOnInit() {
    this.errorMessageService.errorMessage.subscribe(errorMessage => {
      this.statusCode = errorMessage!.StatusCode;
      this.errorMessage = errorMessage!.Message;
    });
  }

  returnToProfileOrLogin(){
    this.router.navigateByUrl("profile");
  }
}
