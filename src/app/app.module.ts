import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatSliderModule,
  MatToolbarModule,
} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// NGX Imports
import { RestangularModule } from 'ngx-restangular'
import { AppRoutingModule } from './app-routing/app-routing.module'
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeaderComponent } from './header/header.component'
import { LoggingComponent } from './logging/logging.component'
import { LoginDialogComponent } from './login-dialog/login-dialog.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { AuthService } from './services/auth.service'
import { UserService } from './services/user.service'

export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000/')
}
// json-server --watch db.json

export { User } from '../shared/user'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LoggingComponent,
    LoginComponent,
    RegisterComponent,
    LoginComponent,
    LoginDialogComponent,
  ],
  imports: [
    BrowserModule,
    [
      MatCardModule,
      MatToolbarModule,
      MatButtonModule,
      MatMenuModule,
      MatSelectModule,
      MatSliderModule,
      MatCheckboxModule,
      MatInputModule,
      MatIconModule,
      MatDialogModule,
    ],
    BrowserAnimationsModule,
    FlexLayoutModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  entryComponents: [LoginDialogComponent],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
