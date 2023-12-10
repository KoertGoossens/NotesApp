import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, switchMap, tap, throwError } from "rxjs";
import { AuthService } from "./http/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  errorCounter: number = 0;

  constructor(private authService: AuthService) {}
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("authToken");
    
    if(token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      });
    }

    return next.handle(req).pipe(catchError(err => this.handleAuthError(err)));
  }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if(err.status === 401 && this.errorCounter == 0){
      this.errorCounter++;

      this.authService.refreshToken().subscribe({
        next: token => {
          localStorage.setItem("authToken", token.data);
        },
        error: err => {
        }
      });
    }
    else {
      this.errorCounter = 0;
    }

    return of(null);
  }
}
