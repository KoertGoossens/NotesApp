import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/home/login/login.component';
import { SignupComponent } from './components/home/signup/signup.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { AdminpanelComponent } from './components/main/adminpanel/adminpanel.component';
import { WritenoteComponent } from './components/main/writenote/writenote.component';
import { ViewnotesComponent } from './components/main/viewnotes/viewnotes.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'notes', component: ViewnotesComponent, canActivate: [AuthGuard] },
  { path: 'newnote', component: WritenoteComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminpanelComponent, canActivate: [AuthGuard] },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
