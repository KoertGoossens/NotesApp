import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/models/note/note';
import { WriteNote } from 'src/app/models/note/writenote';
import { DatetimeService } from 'src/app/services/datetime.service';
import { ErrorMessageService } from 'src/app/services/errormessage.service';
import { NoteService } from 'src/app/services/http/note.service';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent {
  @Input() noteId: number = 0;
  @Output() changeViewType: EventEmitter<number> = new EventEmitter();

  note = new Note();

  noteForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required]),
  })

  constructor(
    private noteService: NoteService,
    private errorMessageService: ErrorMessageService,
    private datetimeService: DatetimeService
  ) {}

  ngOnInit() {
    this.noteService.getNoteById(this.noteId).subscribe({
      next: n => {
        this.note = n.data;
        this.noteForm.patchValue(this.note);
      },
      error: err => {
        this.errorMessageService.handleServerError(err);
      }
    });
  }

  getNoteTimeCreated(timeCreated: string): string {
    return this.datetimeService.getDateTimeString(timeCreated)
  }

  toNotesOverview(){
    this.changeViewType.emit(0);
  }

  submitNote(){
    if(this.noteForm.valid){
      const editedNote: WriteNote = {
        id: this.noteId,
        title: this.noteForm.value.title!,
        content: this.noteForm.value.content!
      };

      this.noteService.editNote(editedNote).subscribe({
        next: result => {
          alert("bericht gewijzigd");
          window.location.reload();
        },
        error: err => {
          this.errorMessageService.handleServerError(err);
        }
      });
    }
    else {
      if (!this.noteForm.controls.title.valid){
        alert("Vul a.u.b. een onderwerp in.");
      }
      else if (!this.noteForm.controls.content.valid){
        alert("Bericht kan niet leeg gelaten worden.");
      }
    }
  }
}
