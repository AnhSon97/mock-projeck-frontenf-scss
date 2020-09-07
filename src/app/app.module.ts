import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainSidebarContainerComponent } from './main-sidebar-container/main-sidebar-container.component';
import { AccountService } from '../app/account.service';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { HttpClientModule } from '@angular/common/http';
import { GroupManagerComponent } from './group-manager/group-manager.component';
import { DetailAccountComponent } from './detail-account/detail-account.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AdminService } from './admin.service';
import { GroupService } from './group-service/group.service';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavBarComponent,
    MainSidebarContainerComponent,
    AccountManagerComponent,
    GroupManagerComponent,
    DetailAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    AuthGuard,
    AccountService,
    AuthService,
    AdminService,
    LoginComponent,
    GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
