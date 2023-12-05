import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent {
  @Input() activeTab: number = 0;
  
  buttonColor: string[] = [];

  ngOnInit(){
    this.buttonColor[this.activeTab] = "#0080FF";
  }
}
