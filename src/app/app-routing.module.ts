import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { EmployeeComponent } from './employee/employee.component';
import { Error404Component } from './error404/error404.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'employee', component: EmployeeComponent,
    canActivate: [LoginGuard]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'rooms', loadChildren: () => import('./component/room/rooms.module').then((m) => m.RoomsModule),
    canActivate: [LoginGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'booking/:roomid', component: BookingComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
