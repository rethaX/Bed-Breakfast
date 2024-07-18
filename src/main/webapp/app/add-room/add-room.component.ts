import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RoomService } from '../room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-add-room',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.scss',
})
export class AddRoomComponent {
  applyForm!: FormGroup;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(
    private roomService: RoomService,
    private fb: FormBuilder,
  ) {
    this.applyForm = this.fb.group({
      roomLocation: [null, Validators.required],
      roomType: [null, Validators.required],
      roomStatus: ['', Validators.required],
      roomPrice: [null, Validators.required],
      photo: [null, Validators.required],
    });
  }

  submitApplication() {
    console.log(this.applyForm.value);
    this.roomService.addRooms(this.applyForm.value).subscribe(res => {
      alert('Room added successful');
      console.log('room added');
    });
  }
}
