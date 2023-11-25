import { Component, EventEmitter, Output } from '@angular/core';
import { NoteForList } from 'src/app/models/noteforlist';
import { NoteService } from 'src/app/services/http/note.service';

@Component({
  selector: 'app-notes-overview',
  templateUrl: './notes-overview.component.html',
  styleUrls: ['./notes-overview.component.css']
})
export class NotesOverviewComponent {
  @Output() changeViewType: EventEmitter<number> = new EventEmitter();

  notes: NoteForList[] = [];
  
  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.getAllNotes().subscribe({
      next: n => {
        this.notes = n;
      },
      error: err => {
        // console.error('Login failed:', err);
      }
    });
  }
  
  toSingleNote(id: number){
    this.changeViewType.emit(id);
  }
}
