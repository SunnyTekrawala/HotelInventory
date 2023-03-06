import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomList } from '../room';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {
  successMessage = '';
  room: RoomList = {
    roomType: "",
    roomNumber: 0,
    amenities: "",
    price: 0,
    photos: " ",
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0
  }
  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
  }
  AddRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      (this.successMessage = 'Room is added succesfully')
      roomsForm.reset();
    }
    )
  }
}
