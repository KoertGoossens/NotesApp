import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/models/note';
import { UserProfile } from 'src/app/models/userprofile';
import { NoteService } from 'src/app/services/http/note.service';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.css']
})
export class SingleNoteComponent {
  @Input() noteId: number = 0;
  @Output() changeViewType: EventEmitter<number> = new EventEmitter();

  profile = new UserProfile();
  note = new Note();
  allowEditNote: boolean = false;

  constructor(
    private userService: UserService,
    private noteService: NoteService) {}
  
  ngOnInit(){
    this.userService.getCurrentUser().subscribe({
      next: (p: UserProfile) => {
        this.profile = p;
      },
      error: err => {
        // console.error(err);
      }
    });

    this.noteService.getNoteById(this.noteId).subscribe({
      next: n => {
        this.note = n;

        if(n.creator?.username === this.profile.username){
          this.allowEditNote = true;
        }
      },
      error: err => {
        // console.error(err);
      }
    });
  }

  toNotesOverview(){
    this.changeViewType.emit(0);
  }

  editNote(){
    this.changeViewType.emit(2);
  }

  deleteNote(){
    this.noteService.deleteNote(this.noteId).subscribe({
      next: result => {
        alert("bericht verwijderd");
      },
      error: err => {
        // console.error(err);
      }
    });

    window.location.reload();
  }
}
