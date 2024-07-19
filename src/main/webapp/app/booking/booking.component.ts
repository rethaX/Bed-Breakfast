import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { RoomService } from '../room.service';
import { BookingService } from '../booking.service';

import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'jhi-booking',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  addForm!: FormGroup;
  minDate: Date;

  route: ActivatedRoute = inject(ActivatedRoute);

  roomService = inject(RoomService);
  constructor(
    private bookingService: BookingService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.addForm = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
    });
    this.minDate = new Date();
  }
  submitApplication() {
    if (this.addForm.valid) {
      const booking: Booking = {
        ...this.addForm.value,
        user: { id: 5 },
        room: { id: 253 },
        bookingStatus: 'Pending',
      };

      this.bookingService.addBooking(booking).subscribe(res => {
        console.log('SuccessFul');
        this.addForm.reset();
        alert('Booked successful');
        this.router.navigate(['/room']);
      });
    }
  }
}
