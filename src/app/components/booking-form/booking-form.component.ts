import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  imports: [ReactiveFormsModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css',
  standalone: true,
})
export class BookingFormComponent {
  bookingForm!: FormGroup;
  bookings: any[] = [];
  @Output() bookingsChange = new EventEmitter<any[]>();

  constructor(private fb: FormBuilder) {
  }
  createForm(){
    this.bookingForm = this.fb.group({
      bookingDate: ['', Validators.required],
      bookingHour: ['', Validators.required],
      userName: ['', Validators.required],
      mobileNo: ['', [Validators.required]],
      email: ['', Validators.email]
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.addBookings();
  }

  addBookings() {
    this.bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    console.log(this.bookings);
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.bookings.push(this.bookingForm.value);
      this.bookingsChange.emit(this.bookings);
      console.log(this.bookings);
      // Reset the form after submission
      localStorage.setItem('bookings', JSON.stringify(this.bookings));
      this.bookingForm.reset();
    } else {
      alert('Please fill all the fields correctly');
    }
  }
}
