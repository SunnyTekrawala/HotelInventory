import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../component/room/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {

  empName: string = "Sunny";
  constructor(@Self() private roomService: RoomsService) {

  }

  ngOnInit(): void {
  }

}
