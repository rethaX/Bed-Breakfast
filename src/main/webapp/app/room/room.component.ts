import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoomService } from '../room.service';
import { RoomInterface } from '../room-interface';

@Component({
  selector: 'jhi-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
})
export class RoomComponent {
  Rooms: RoomInterface[] = [];

  Add() {
    this.router.navigate(['Add']);
  }

  constructor(
    private router: Router,
    private roomService: RoomService,
  ) {}

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(
      RoomData => {
        this.Rooms = RoomData;
        console.log(this.Rooms);
      },
      error => {
        console.error('Error fetching', error);
      },
    );
  }
}
