import { Component } from '@angular/core';
import { UserProfile } from 'src/app/models/user/userprofile';
import { DatetimeService } from 'src/app/services/datetime.service';
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
    private datetimeService: DatetimeService
  ) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe({
      next: p => {
        this.profile = p.data;
      },
      error: err => {
        this.errorMessageService.handleServerError(err);
      }
    });
  }

  getUserDateCreated(timeCreated: string): string {
    return this.datetimeService.getDateString(timeCreated)
  }
}
