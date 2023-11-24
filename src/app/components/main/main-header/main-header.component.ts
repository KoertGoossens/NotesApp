import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  @Output() mainTab: EventEmitter<number> = new EventEmitter();
  
  constructor(private router: Router) {}
  
  changeMainTab(tab: number){
    this.mainTab.emit(tab);
  }

  logoutUser(){
    localStorage.removeItem("authToken");
    this.router.navigateByUrl("");
  }
}
