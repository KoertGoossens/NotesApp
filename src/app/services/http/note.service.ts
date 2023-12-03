import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ServiceResponse } from 'src/app/models/serviceresponse';
import { WriteNote } from 'src/app/models/note/writenote';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = `${environment.apiUrl}/Note`;

  constructor(private http: HttpClient) {}

  public getNoteById(id: number): Observable<ServiceResponse> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ServiceResponse>(url);
  }

  public getAllNotes(): Observable<ServiceResponse> {
    const url = `${this.apiUrl}/getall`;
    return this.http.get<ServiceResponse>(url);
  }

  public submitNote(note: WriteNote): Observable<ServiceResponse> {
    const url = `${this.apiUrl}/submit`;
    return this.http.post<ServiceResponse>(url, note);
  }

  public editNote(note: WriteNote): Observable<ServiceResponse> {
    const url = `${this.apiUrl}/edit`;
    return this.http.put<ServiceResponse>(url, note);
  }
  
  public deleteNote(id: number): Observable<ServiceResponse> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<ServiceResponse>(url);
  }
}
