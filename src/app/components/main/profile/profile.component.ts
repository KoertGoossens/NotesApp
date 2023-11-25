import { Component } from '@angular/core';
import { UserProfile } from 'src/app/models/userprofile';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile = new UserProfile();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe({
      next: (p: UserProfile) => {
        this.profile = p;
      },
      error: err => {
        // console.error('Login failed:', err);
      }
    });
  }
}
