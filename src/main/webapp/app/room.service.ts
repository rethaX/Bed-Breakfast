import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private Base_url = 'http://localhost:9090/roomController';

  constructor(private http: HttpClient) {}
  getRooms() {
    return this.http.get<any[]>(`${this.Base_url}`);
  }

  /** POST: add a new room to the server */
  addRooms(userRoom: any) {
    return this.http.post<any>(`${this.Base_url}`, userRoom);
  }
}
