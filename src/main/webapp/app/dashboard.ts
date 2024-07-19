export interface Dashboard {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    username: string;
  };
  room: {
    id: number;
    roomLocation: string;
    roomType: string;
    roomStatus: string;
    roomPrice: number;
    photo: string;
  };
  bookingStatus: string;
  endDate: string;
  startDate: string;
  bookingId: number;
}
