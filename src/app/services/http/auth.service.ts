import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { LoginUser } from '../../models/loginuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/Auth`;
  
  constructor(private http: HttpClient) {}

  public registerUser(user: User): Observable<any> {
    const url = `${this.apiUrl}/register`;
    return this.http.post<any>(url, user);
  }

  public loginUser(user: LoginUser): Observable<string> {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, user, { responseType: "text" });
  }

  public logoutUser(){
    localStorage.removeItem("authToken");
  }
}
