import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from 'src/app/models/note/note';
import { UserProfile } from 'src/app/models/user/userprofile';
import { ErrorMessageService } from 'src/app/services/errormessage.service';
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
    private noteService: NoteService,
    private errorMessageService: ErrorMessageService,
    ) {}
  
  ngOnInit(){
    this.userService.getCurrentUser().subscribe({
      next: p => {
        this.profile = p.data;
      },
      error: err => {
        this.errorMessageService.showErrorMessage(err);
      }
    });

    this.noteService.getNoteById(this.noteId).subscribe({
      next: n => {
        this.note = n.data;

        if(n.data.creator?.username === this.profile.username){
          this.allowEditNote = true;
        }
      },
      error: err => {
        this.errorMessageService.showErrorMessage(err);
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
        this.errorMessageService.showErrorMessage(err);
      }
    });

    window.location.reload();
  }
}
