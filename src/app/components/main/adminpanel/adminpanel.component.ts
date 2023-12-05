import { Component } from '@angular/core';
import { UserProfile } from 'src/app/models/user/userprofile';
import { DatetimeService } from 'src/app/services/datetime.service';
import { ErrorMessageService } from 'src/app/services/errormessage.service';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent {
  users: UserProfile[] = [];
  
  constructor(
    private userService: UserService,
    private errorMessageService: ErrorMessageService,
    private datetimeService: DatetimeService
  ) {}

  ngOnInit(){
    this.userService.getAllUsers().subscribe({
      next: u => {
        this.users = u.data;
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
