import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoggingComponent } from './logging/logging.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { MatCardModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatSelectModule,
   MatSliderModule, MatCheckboxModule, MatInputModule, MatIconModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
//NGX Imports
import { RestangularModule } from 'ngx-restangular';


import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';


export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/');
}
//json-server --watch db.json

export { User } from '../shared/user';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LoggingComponent,
    LoginComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    [ MatCardModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatSelectModule, MatSliderModule,
      MatCheckboxModule, MatInputModule, MatIconModule ],
    BrowserAnimationsModule,
    FlexLayoutModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
