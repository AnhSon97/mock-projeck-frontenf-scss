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
import { from } from 'rxjs';
import { GroupManagerComponent } from './group-manager/group-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    NavBarComponent,
    MainSidebarContainerComponent,
    AccountManagerComponent,
    GroupManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AccountService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
