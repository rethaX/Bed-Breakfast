import { Component, inject } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Dashboard } from '../Dashboard';

@Component({
  selector: 'jhi-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  dashboardService = inject(DashboardService);

  allBookings: Dashboard[] | undefined;

  constructor() {
    this.dashboardService.getAllBookings().subscribe(bookingsDta => {
      this.allBookings = bookingsDta;
    });
  }
  cancel() {
    alert('Successfully cancelled');
  }
}
