import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudioListComponent } from "./components/studio-list/studio-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StudioListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studio-booking-app';
}
