import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WriteNote } from 'src/app/models/note/writenote';
import { ErrorMessageService } from 'src/app/services/errormessage.service';
import { NoteService } from 'src/app/services/http/note.service';

@Component({
  selector: 'app-writenote',
  templateUrl: './writenote.component.html',
  styleUrls: ['./writenote.component.css']
})
export class WritenoteComponent {
  constructor(
    private noteService: NoteService,
    private errorMessageService: ErrorMessageService,
    private router: Router
  ) {}

  noteForm = new FormGroup({
    title: new FormControl("", [Validators.required]),
    content: new FormControl("", [Validators.required]),
  })

  submitNote(){
    if(this.noteForm.valid){
      const note: WriteNote = {
        title: this.noteForm.value.title!,
        content: this.noteForm.value.content!
      };

      this.noteService.submitNote(note).subscribe({
        next: result => {
          alert("Bericht aangemaakt.");
          this.router.navigateByUrl("notes");
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
