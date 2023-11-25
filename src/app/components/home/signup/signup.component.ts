import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
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
    private router: Router
  ) {}
  
  registerForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })

  submitRegisterForm(){
    const user: User = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    this.authService.registerUser(user).subscribe({
      next: result => {
        alert("Account aangemaakt.");
        // localStorage.setItem("authToken", token);
        // this.router.navigateByUrl("/main");
        this.homeTab.emit(0);
      },
      error: err => {
        // console.error('Register failed:', err);
      }
    });
  }
}
