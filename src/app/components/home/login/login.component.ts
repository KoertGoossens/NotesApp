import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessage } from 'src/app/models/errormessage';
import { LoginUser } from 'src/app/models/user/loginuser';
import { ErrorMessageService } from 'src/app/services/errormessage.service';
import { AuthService } from 'src/app/services/http/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private errorMessageService: ErrorMessageService,
  ) {}
  
  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.minLength(3)]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
  })

  submitLoginForm(){
    if(this.loginForm.valid){
      const user: LoginUser = {
        username: this.loginForm.value.username!,
        password: this.loginForm.value.password!
      };

      this.authService.loginUser(user).subscribe({
        next: token => {
          localStorage.setItem("authToken", token.data);
          this.router.navigateByUrl("profile");
        },
        error: err => {
          this.errorMessageService.handleServerError(err);
        }
      });
    }
    else if (!this.loginForm.controls.username.valid || !this.loginForm.controls.password.valid){
      alert("Ongeldige gebruikersnaam/wachtwoord.");
    }
  }
}
