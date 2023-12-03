import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/models/user/userprofile';
import { ErrorMessageService } from 'src/app/services/errormessage.service';
import { AuthService } from 'src/app/services/http/auth.service';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  @Input() activeTab: number = 0;
  @Output() mainTab: EventEmitter<number> = new EventEmitter();

  buttonColor: string[] = [];
  user = new UserProfile();

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private errorMessageService: ErrorMessageService
  ) {}

  ngOnInit(){
    this.buttonColor[this.activeTab] = "#0080FF";

    this.userService.getCurrentUser().subscribe({
      next: u => {
        this.user = u.data;
      },
      error: err => {
        this.errorMessageService.handleServerError(err);
      }
    });
  }

  changeMainTab(tab: number){
    this.mainTab.emit(tab);
  }

  onLogoutUser(){
    this.authService.logoutUser();
    this.router.navigateByUrl("login");
  }
}
