import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/loginuser';
import { AuthService } from 'src/app/services/http/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })

  submitLoginForm(){
    const user: LoginUser = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };

    this.authService.loginUser(user).subscribe({
      next: (token: string) => {
        localStorage.setItem("authToken", token);
        this.router.navigateByUrl("/main");
      },
      error: err => {
        // console.error('Login failed:', err);
      }
    });
  }
}
