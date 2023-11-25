import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/http/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  @Output() mainTab: EventEmitter<number> = new EventEmitter();
  
  constructor(
    private router: Router,
    private authService: AuthService) {}
  
  changeMainTab(tab: number){
    this.mainTab.emit(tab);
  }

  onLogoutUser(){
    this.authService.logoutUser();
    this.router.navigateByUrl("home");
  }
}
