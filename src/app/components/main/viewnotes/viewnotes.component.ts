import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NoteForList } from 'src/app/models/note/noteforlist';
import { DatetimeService } from 'src/app/services/datetime.service';
import { ErrorMessageService } from 'src/app/services/errormessage.service';
import { NoteService } from 'src/app/services/http/note.service';

@Component({
  selector: 'app-viewnotes',
  templateUrl: './viewnotes.component.html',
  styleUrls: ['./viewnotes.component.css']
})
export class ViewnotesComponent {
  notes: NoteForList[] = [];

  constructor(
    private router: Router,
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
    this.router.navigate(["note", id]);
  }
}
