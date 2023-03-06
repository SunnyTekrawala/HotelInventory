import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { app_config, APP_SERVIVE_CONFIG } from './AppConfig/appconfig.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RequestInterceptor } from './request.interceptor';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Error404Component } from './error404/error404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { EmailValidatorDirective } from './emailValidator/email-validator.directive';
import { BookingComponent } from './booking/booking.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion'

//import { RoomsModule } from './component/room/rooms.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AppNavComponent,
    Error404Component,
    LoginComponent,
    EmailValidatorDirective,
    AppNavComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    // RoomsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_SERVIVE_CONFIG,
      useValue: app_config
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
