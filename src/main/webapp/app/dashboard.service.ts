import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private Base_url = 'http://localhost:9090/bookingController';

  constructor(private http: HttpClient) {}

  getAllBookings() {
    return this.http.get<any[]>(this.Base_url);
  }
}
