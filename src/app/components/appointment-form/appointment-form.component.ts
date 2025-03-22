import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm: FormGroup;
  appointments: any[] = [];

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      appointmentDate: ['', Validators.required],
      appointmentHour: ['', Validators.required],
      userName: ['', Validators.required],
      mobileNo: ['', [Validators.required]],
      email: ['', Validators.email]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.appointmentForm.valid) {
      this.appointments.push(this.appointmentForm.value);
      console.log(this.appointments);
      // Reset the form after submission
      this.appointmentForm.reset();
    } else {
      alert('Please fill all the fields correctly');
    }
  }
}