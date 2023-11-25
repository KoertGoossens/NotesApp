import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/http/note.service';

@Component({
  selector: 'app-writenote',
  templateUrl: './writenote.component.html',
  styleUrls: ['./writenote.component.css']
})
export class WritenoteComponent {
  constructor(private noteService: NoteService) {}

  noteForm = new FormGroup({
    title: new FormControl(),
    content: new FormControl()
  })

  submitNote(){
    const note: Note = {
      title: this.noteForm.value.title,
      content: this.noteForm.value.content
    };

    this.noteService.submitNote(note).subscribe({
      next: result => {
        alert("bericht aangemaakt");
      },
      error: err => {
        // console.error('Login failed:', err);
      }
    });

    window.location.reload();
  }
}
