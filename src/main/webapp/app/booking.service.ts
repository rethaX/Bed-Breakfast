import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private Base_url = 'http://localhost:9090/bookingController';

  constructor(private http: HttpClient) {}

  getBooking() {
    return this.http.get<any[]>(this.Base_url);
  }

  addBooking(roomBooking: Booking): Observable<object> {
    return this.http.post<object>(this.Base_url, roomBooking);
  }

  deleteBooking() {
    return this.http.delete<any[]>(this.Base_url);
  }
}
