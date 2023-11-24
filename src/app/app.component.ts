import { Component } from '@angular/core';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NotesApp';
  user = new User();

  constructor(private authService: AuthService) {}

  registerUser(user: User) {
    this.authService.registerUser(user).subscribe();
  }

  getNotes() {
    this.authService.getNotes().subscribe((name: string) => {
      alert(name);
    })
  }
}
