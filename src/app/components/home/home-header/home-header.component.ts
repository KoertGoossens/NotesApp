import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {
  @Input() activeTab: number = 0;
  @Output() homeTab: EventEmitter<number> = new EventEmitter();
  
  buttonColor: string[] = [];

  ngOnInit(){
    this.buttonColor[this.activeTab] = "#0080FF";
  }

  changeHomeTab(tab: number){
    this.homeTab.emit(tab);
  }
}
