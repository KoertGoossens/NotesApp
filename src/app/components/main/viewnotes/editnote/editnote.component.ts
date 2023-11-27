import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/models/note/note';
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

  noteForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required]),
  })

  constructor(
    private noteService: NoteService,
    private errorMessageService: ErrorMessageService,
    ) {}

  ngOnInit() {
    this.noteService.getNoteById(this.noteId).subscribe({
      next: n => {
        this.noteForm.patchValue(n.data);
      },
      error: err => {
        this.errorMessageService.handleServerError(err);
      }
    });
  }

  toNotesOverview(){
    this.changeViewType.emit(0);
  }

  submitNote(){
    if(this.noteForm.valid){
      const editedNote: Note = {
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
        alert("Onderwerp moet ingevuld worden.");
      }
      else if (!this.noteForm.controls.content.valid){
        alert("Inhoud moet ingevuld worden.");
      }
    }
  }
}
