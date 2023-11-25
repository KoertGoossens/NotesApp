import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/http/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeTab: number = 0;

  constructor(private authService: AuthService) {}
  
  ngOnInit(){
    this.authService.logoutUser();
  }

  changeHomeTab(tab: number){
    this.homeTab = tab;
  }
}
