import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from './booking.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  @Input() rNumber!: '';


  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private fb: FormBuilder, private bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomid');
    this.bookingForm = this.fb.group({
      personalDetails: this.fb.group({
        roomId: new FormControl({ value: roomId, disabled: true }),
        guestEmail: ['', [Validators.email, Validators.required]],
        checkinDate: [''],
        checkoutDate: [''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: ['', [Validators.required]],
        guestName: ['', [Validators.required]],
      }),
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([
        this.fb.group({
          guestName: [''], age: new FormControl('')
        }),
      ]),
    });
  }
  addBooking() {
    console.log(this.bookingForm.value);
    this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data) => {

    })
    this.bookingForm.reset({
      roomId: '',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: []
    })
  }

  addGuest() {
    this.guests.push(
      this.fb.group({
        guestName: [''], age: new FormControl('')
      })
    )
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}