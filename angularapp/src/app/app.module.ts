
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PlayerComponent } from './player/player.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './admin/admin.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlayerComponent,
    RegistrationComponent,
    AdminComponent,
    OrganizerComponent,
    HomeComponent,
    ErrorComponent,
    NavBarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgModule,
    FormsModule
    
    
  ],
  providers: [
    {provide: LoginComponent, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
