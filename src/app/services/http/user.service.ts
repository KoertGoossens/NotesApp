import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceResponse } from 'src/app/models/serviceresponse';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/User`;

  constructor(private http: HttpClient) {}

  public getCurrentUser(): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(this.apiUrl);
  }
}
