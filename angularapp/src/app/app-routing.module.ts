import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminService } from './services/admin.service';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'organizer', component: OrganizerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'error', component: ErrorComponent, data: { message: 'Oops! Something went wrong.' } },
  { path: '**', redirectTo: '/error', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
