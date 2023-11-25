import { Component } from '@angular/core';

@Component({
  selector: 'app-viewnotes',
  templateUrl: './viewnotes.component.html',
  styleUrls: ['./viewnotes.component.css']
})
export class ViewnotesComponent {
  viewType: number = 0;
  noteId: number = 0;

  toSingleNoteView(id: number) {
    this.viewType = 1;
    this.noteId = id;
  }

  toNotesOverview(viewType: number) {
    this.viewType = viewType;
  }
}
