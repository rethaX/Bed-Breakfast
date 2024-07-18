export interface Booking {
  user: {
    id: number;
  };
  room: {
    id: number;
  };
  bookingStatus: string;
  endDate: Date;
  startDate: Date;
}
