import { Component } from '@angular/core';
import { UserProfile } from 'src/app/models/user/userprofile';
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
    private errorMessageService: ErrorMessageService
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
}
