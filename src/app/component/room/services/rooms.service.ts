import { Inject, Injectable } from '@angular/core';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { APP_SERVIVE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { RoomList } from '../room';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
  ]
  getRooms$: any;
  constructor(@Inject(HttpClient) private http: HttpClient, @Inject(APP_SERVIVE_CONFIG) private config: AppConfig) {
    console.log(this.config.apiEndpoint);
  }

  getRooms() {
    // const headers = new HttpHeaders({ 'token': '12345s' });
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomList[]>(`/api/rooms/${id}`);
  }
}
