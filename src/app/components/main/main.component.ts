import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  mainTab: number = 1;

  changeMainTab(tab: number){
    this.mainTab = tab;
  }
}