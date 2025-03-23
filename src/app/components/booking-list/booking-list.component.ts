import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-list',
  imports: [CommonModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent {
  bookings: any[] = [];

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings() {
    this.bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    console.log(this.bookings);
  }
}
