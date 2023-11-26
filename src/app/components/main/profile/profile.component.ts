import { Component } from '@angular/core';
import { UserProfile } from 'src/app/models/user/userprofile';
import { ErrorMessageService } from 'src/app/services/errormessage.service';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile = new UserProfile();

  constructor(
    private userService: UserService,
    private errorMessageService: ErrorMessageService,
    ) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe({
      next: p => {
        this.profile = p.data;
      },
      error: err => {
        this.errorMessageService.showErrorMessage(err);
      }
    });
  }
}
