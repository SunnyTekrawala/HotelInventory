import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { RoomList } from '../room';


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit {
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom: EventEmitter<RoomList> = new EventEmitter<RoomList>();
  @Input() price = 0;


  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
  constructor() { }
  ngOnInit(): void {

  }

}
