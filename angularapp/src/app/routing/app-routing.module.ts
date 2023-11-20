import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../admin/admin.component';
import { OrganizerComponent } from '../organizer/organizer.component';
import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // {path : '' , redirectTo :'/home' , pathMatch :'full'},
  { path: 'organizer', component: OrganizerComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegistrationComponent },
  // { path: 'error', component: ErrorComponent, data: { message: 'Oops! Something went wrong.' } },
  // { path: '**', redirectTo: '/error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
