import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeTab: number = 0;

  changeHomeTab(tab: number){
    this.homeTab = tab;
  }
}
