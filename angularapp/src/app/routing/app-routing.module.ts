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
  // {path : '' , redirectTo :'/home' , pathMatch :'full'},
  // // { path: 'login', component: LoginComponent },
  // // { path: '', component: HomeComponent },
  // { path: 'admin', component: AdminComponent },
  // { path: 'organizer', component: OrganizerComponent },
  // { path: 'error', component: ErrorComponent },
  // { path: 'error', component: ErrorComponent, data: { message: 'Oops! Something went wrong.' } },
  // { path: 'register', component: RegistrationComponent },
  // { path: '**', redirectTo: '/error', pathMatch: 'full' }
  {path : 'listteams', component : ListTeamsComponent},
  {path : 'listteam/:id', component : FindTeamComponent},
  {path : 'addplayer', component : AddPlayerComponent},
  {path : 'addteam', component : AddTeamComponent},
  {path : 'editteam/:id', component : EditTeamComponent},
  {path : 'deleteteam/:id', component : DeleteTeamComponent},
  {path : 'listplayer', component : ListPlayerComponent},
  {path : 'editplayer/:id', component : EditPlayerComponent},
  {path : 'deleteplayer/:id', component : DeletePlayerComponent},
  {path:'admin',component:AdminComponent},
  {path:'error',component:ErrorComponent},
  {path:'organizer',component:OrganizerComponent},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'players',component:PlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
