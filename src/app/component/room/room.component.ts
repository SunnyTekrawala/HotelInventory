import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { Room, RoomList } from './room';
import { RoomsService } from './services/rooms.service';



@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {


  hideRooms = false;
  error$: any;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  roomList: RoomList[] = [];
  selectedRoom!: RoomList;

  // stream = new Observable<string>(observer => {
  //   observer.next('user1');
  //   observer.next('user2');
  //   observer.next('user3');
  //   observer.complete();
  // })

  // roomsCount$ = this.roomsService.getRooms$.pipe(
  //   map((rooms) => this.rooms.length)
  // );

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    // this.stream.subscribe((data) => console.log(data));
    this.roomsService.getRooms().subscribe(rooms => {
      this.roomList = rooms;
    });
  }
  noOfRooms = 10;
  priceFilter = new FormControl(0);

  // addRoom() {
  //   const room: RoomList = {
  //     // roomNumber: 101,
  //     roomType: 'Deluxe room',
  //     amenities: 'TV, Snacks',
  //     price: 700,
  //     photos: '',
  //     checkinTime: new Date('11-Nov-2021'),
  //     checkoutTime: new Date('12-Nov-2021'),
  //     rating: 3.8,
  //     roomNumber: 0
  //   }
  //   // this.roomList = [...this.roomList, newRoom];
  //   this.roomsService.addRoom(room).subscribe((data) => {
  //     this.roomList = data;
  //   })
  // }

  // editRoom() {
  //   const room: RoomList = {
  //     roomNumber: 3,
  //     roomType: 'Deluxe room',
  //     amenities: 'TV, Snacks',
  //     price: 700,
  //     photos: '',
  //     checkinTime: new Date('11-Nov-2021'),
  //     checkoutTime: new Date('12-Nov-2021'),
  //     rating: 3.8,
  //   }

  //   this.roomsService.editRoom(room).subscribe((data) => {
  //     this.roomList = data;
  //   })
  // }

  // deleteRoom() {
  //   this.roomsService.deleteRoom('3').subscribe((data) => {
  //     this.roomList = data;
  //   })
  // }
}
