import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component'
import { MainSidebarContainerComponent } from './main-sidebar-container/main-sidebar-container.component';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { GroupManagerComponent } from './group-manager/group-manager.component';
import { DetailAccountComponent } from './detail-account/detail-account.component';



const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "logged", component: MainSidebarContainerComponent },
  { path: "account", component: AccountManagerComponent },
  { path: "group", component: GroupManagerComponent},
  { path: "ditail/:id", component: DetailAccountComponent}
  ];




  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
