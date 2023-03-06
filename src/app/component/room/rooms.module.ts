import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomComponent } from './room.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultViewComponent } from 'src/app/default-view/default-view.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    RoomComponent,
    RoomsListComponent,
    RoomsBookingComponent,
    RoomsAddComponent,
    DefaultViewComponent,
    FilterPipe],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoomsModule { }
