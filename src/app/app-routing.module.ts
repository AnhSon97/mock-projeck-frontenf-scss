import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import { MainSidebarContainerComponent } from './main-sidebar-container/main-sidebar-container.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "logged", component: MainSidebarContainerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
