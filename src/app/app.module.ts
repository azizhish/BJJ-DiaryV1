import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MatCardModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatSelectModule, MatSliderModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestangularModule } from 'ngx-restangular';
import { LoggingComponent } from './logging/logging.component';

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
    LoggingComponent
  ],
  imports: [
    BrowserModule,
    [ MatCardModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatSelectModule, MatSliderModule],
    BrowserAnimationsModule,
    FlexLayoutModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
