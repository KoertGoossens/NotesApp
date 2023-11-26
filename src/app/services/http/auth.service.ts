import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoginUser } from '../../models/user/loginuser';
import { ServiceResponse } from 'src/app/models/serviceresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/Auth`;
  
  constructor(private http: HttpClient) {}

  public registerUser(user: User): Observable<ServiceResponse> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<ServiceResponse>(url, user);
  }

  public loginUser(user: LoginUser): Observable<ServiceResponse> {
    const url = `${this.apiUrl}/login`;
    return this.http.post<ServiceResponse>(url, user);
  }

  public logoutUser(){
    localStorage.removeItem("authToken");
  }
}
