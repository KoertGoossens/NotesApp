import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthInterceptor } from './services/auth.interceptor';

import { LoginComponent } from './components/home/login/login.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';
import { SignupComponent } from './components/home/signup/signup.component';
import { MainHeaderComponent } from './components/main/main-header/main-header.component';
import { WritenoteComponent } from './components/main/writenote/writenote.component';
import { ViewnotesComponent } from './components/main/viewnotes/viewnotes.component';
import { NotesOverviewComponent } from './components/main/viewnotes/notes-overview/notes-overview.component';
import { SingleNoteComponent } from './components/main/viewnotes/single-note/single-note.component';
import { EditnoteComponent } from './components/main/viewnotes/editnote/editnote.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AdminpanelComponent } from './components/main/adminpanel/adminpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HomeHeaderComponent,
    SignupComponent,
    MainHeaderComponent,
    WritenoteComponent,
    ViewnotesComponent,
    NotesOverviewComponent,
    SingleNoteComponent,
    EditnoteComponent,
    PagenotfoundComponent,
    AdminpanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
