import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {
  constructor() {}

  getDateString(date: string): string {
    const time = new Date(date);
    let day: string = time.getDate().toString();
    let month: string = time.getMonth().toString();
    const year: string = time.getFullYear().toString();

    if(day.length == 1){
      day = "0" + day;
    }
    if(month.length == 1){
      month = "0" + month;
    }

    return `${day}-${month}-${year}`;
  }

  getDateTimeString(dateTime: string): string {
    const time = new Date(dateTime);
    let hour: string = time.getHours().toString();
    let minute: string = time.getMinutes().toString();
    
    if(hour.length == 1){
      hour = "0" + hour;
    }
    if(minute.length == 1){
      minute = "0" + minute;
    }

    const date = this.getDateString(dateTime);
    return `${date} om ${hour}:${minute}`;
  }
}
