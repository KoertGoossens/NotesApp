import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Note } from 'src/app/models/note';
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
    title: new FormControl(),
    content: new FormControl()
  })

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteService.getNoteById(this.noteId).subscribe({
      next: n => {
        this.noteForm.patchValue(n);
      },
      error: err => {
        // console.error('Login failed:', err);
      }
    });
  }

  toNotesOverview(){
    this.changeViewType.emit(0);
  }

  submitNote(){
    const editedNote: Note = {
      id: this.noteId,
      title: this.noteForm.value.title,
      content: this.noteForm.value.content
    };

    this.noteService.editNote(editedNote).subscribe({
      next: result => {
        alert("bericht gewijzigd");
      },
      error: err => {
        // console.error('Login failed:', err);
      }
    });

    window.location.reload();
  }
}
