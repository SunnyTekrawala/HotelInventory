import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {
  id: number = 0;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => { this.id = params['id'] });
  }

}
