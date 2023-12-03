import { Component, EventEmitter, Output } from '@angular/core';
import { NoteForList } from 'src/app/models/note/noteforlist';
import { DatetimeService } from 'src/app/services/datetime.service';
import { ErrorMessageService } from 'src/app/services/errormessage.service';
import { NoteService } from 'src/app/services/http/note.service';

@Component({
  selector: 'app-notes-overview',
  templateUrl: './notes-overview.component.html',
  styleUrls: ['./notes-overview.component.css']
})
export class NotesOverviewComponent {
  @Output() changeViewType: EventEmitter<number> = new EventEmitter();

  notes: NoteForList[] = [];

  constructor(
    private noteService: NoteService,
    private errorMessageService: ErrorMessageService,
    private datetimeService: DatetimeService
  ) {}

  ngOnInit() {
    this.noteService.getAllNotes().subscribe({
      next: n => {
        this.notes = n.data;
      },
      error: err => {
        this.errorMessageService.handleServerError(err);
      }
    });
  }
  
  getNoteTimeCreated(timeCreated: string): string {
    return this.datetimeService.getDateTimeString(timeCreated)
  }

  toSingleNote(id: number){
    this.changeViewType.emit(id);
  }
}
