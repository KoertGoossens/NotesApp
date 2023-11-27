import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user/user';
import { ErrorMessageService } from 'src/app/services/errormessage.service';
import { AuthService } from 'src/app/services/http/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  @Output() homeTab: EventEmitter<number> = new EventEmitter();
  
  constructor(
    private authService: AuthService,
    private errorMessageService: ErrorMessageService,
  ) {}
  
  registerForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
  })

  submitRegisterForm(){
    if(this.registerForm.valid){
      const user: User = {
        username: this.registerForm.value.username!,
        email: this.registerForm.value.email!,
        password: this.registerForm.value.password!
      };
  
      this.authService.registerUser(user).subscribe({
        next: result => {
          alert("Account aangemaakt.");
          this.homeTab.emit(0);
        },
        error: err => {
          this.errorMessageService.handleServerError(err);
        }
      });
    }
    else {
      if (!this.registerForm.controls.username.valid){
        alert("Gebruikersnaam moet minimaal 3 tekens lang zijn.");
      }
      else if (!this.registerForm.controls.email.valid){
        alert("Geen geldig e-mailadres.");
      }
      else if (!this.registerForm.controls.password.valid){
        alert("Wachtwoord moet minimaal 8 tekens lang zijn.");
      }
    }
  }
}
