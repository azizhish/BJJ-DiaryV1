import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

//The Components to which we will route to
import { DashboardComponent } from "../dashboard/dashboard.component";
import { LoggingComponent } from "../logging/logging.component";
<<<<<<< HEAD
import { LoginComponent } from "../login/login.component";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard/:id", component: DashboardComponent },
  { path: "logging/:id", component: LoggingComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'input/:id', component: InputDataComponent },
  // { path: 'graph', component: Graph1Component },
  { path: "", redirectTo: "/login", pathMatch: "full" }
=======
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard/:id', component: DashboardComponent },
    { path: 'logging/:id', component: LoggingComponent },
    { path: 'register', component: RegisterComponent },
    // { path: 'input/:id', component: InputDataComponent },
    // { path: 'graph', component: Graph1Component },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
>>>>>>> 139a53180d66d89e67c181ab3ee17c7962b7d1b5
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
