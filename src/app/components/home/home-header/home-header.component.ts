import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {
  @Output() homeTab: EventEmitter<number> = new EventEmitter();
  
  changeHomeTab(tab: number){
    this.homeTab.emit(tab);
  }
}
