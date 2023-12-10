import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/models/user/userprofile';
import { ErrorMessageService } from 'src/app/services/errormessage.service';
import { UserService } from 'src/app/services/http/user.service';
import { LogoutService } from 'src/app/services/logout.service';

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
    private userService: UserService,
    private errorMessageService: ErrorMessageService,
    private logoutService: LogoutService
  ) {}

  ngOnInit(){
    if(this.activeTab > 0){
      this.buttonColor[this.activeTab - 1] = "#0080FF";
    }
    
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
    this.logoutService.logoutUser();
    this.router.navigateByUrl("login");
  }
}
