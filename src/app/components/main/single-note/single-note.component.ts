import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/models/note/note';
import { UserProfile } from 'src/app/models/user/userprofile';
import { DatetimeService } from 'src/app/services/datetime.service';
import { ErrorMessageService } from 'src/app/services/errormessage.service';
import { NoteService } from 'src/app/services/http/note.service';
import { UserService } from 'src/app/services/http/user.service';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.css']
})
export class SingleNoteComponent {
  noteId: number = 0;
  profile = new UserProfile();
  note = new Note();
  allowEditNote: boolean = false;

  constructor(
    private userService: UserService,
    private noteService: NoteService,
    private errorMessageService: ErrorMessageService,
    private datetimeService: DatetimeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(){
    this.noteId = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getCurrentUser().subscribe({
      next: p => {
        this.profile = p.data;
      },
      error: err => {
        this.errorMessageService.handleServerError(err);
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
        this.errorMessageService.handleServerError(err);
      }
    });
  }

  getNoteTimeCreated(timeCreated: string): string {
    return this.datetimeService.getDateTimeString(timeCreated)
  }

  editNote(){
    this.router.navigate(["editnote", this.noteId]);
  }

  deleteNote(){
    this.noteService.deleteNote(this.noteId).subscribe({
      next: result => {
        alert("bericht verwijderd");
      },
      error: err => {
        this.errorMessageService.handleServerError(err);
      }
    });

    this.router.navigateByUrl("notes");
  }
}
