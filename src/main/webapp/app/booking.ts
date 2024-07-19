export interface Booking {
  bookingId: number;
  user: number;
  room: number;
  bookingStatus: string;
  startDate: Date;
  endDate: Date;
}
