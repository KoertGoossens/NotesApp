import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Note } from '../../models/note';
import { NoteForList } from '../../models/noteforlist';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = `${environment.apiUrl}/Note`;

  constructor(private http: HttpClient) {}

  public getNoteById(id: number): Observable<Note> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Note>(url);
  }

  public getAllNotes(): Observable<NoteForList[]> {
    const url = `${this.apiUrl}/getall`;
    return this.http.get<NoteForList[]>(url);
  }

  public submitNote(note: Note): Observable<any> {
    const url = `${this.apiUrl}/submit`;
    return this.http.post<any>(url, note);
  }

  public editNote(note: Note): Observable<any> {
    const url = `${this.apiUrl}/edit`;
    return this.http.put<any>(url, note);
  }
  
  public deleteNote(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
