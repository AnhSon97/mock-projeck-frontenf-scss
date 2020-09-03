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
import { DetailAccountComponent } from './detail-account/detail-account.component';
import { FormsModule } from '@angular/forms';


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
    FormsModule
  ],
  providers: [
    AuthGuard,
    AccountService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
