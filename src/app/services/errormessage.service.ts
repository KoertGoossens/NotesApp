import { Injectable } from '@angular/core';
import { ErrorMessage } from '../models/errormessage';
import { ServiceResponse } from '../models/serviceresponse';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  constructor() {}

  public showErrorMessage(err: any){
    alert(err.error.Message);
  }
}
