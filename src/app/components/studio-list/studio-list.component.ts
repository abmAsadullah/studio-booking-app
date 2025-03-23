import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';
import { BookingFormComponent } from '../booking-form/booking-form.component';
import { StudioService } from '../../services/studio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-studio-list',
  imports: [CommonModule, FormsModule, FilterPipe, BookingFormComponent],
  templateUrl: './studio-list.component.html',
  styleUrl: './studio-list.component.css'
})
export class StudioListComponent {
  dataList: any[] = [];
  searchText: any;
  bookings: any[] = [];

  constructor(
    private studioService: StudioService,     
    private modalService: NgbModal,
  ) { }

  bookNow(bookNowPopUp: any) {
    this.modalService.open(bookNowPopUp, {ariaLabelledBy: 'modal-basic-title', size: 'lg'});
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.studioService.getData().subscribe((data) => {
      this.dataList = JSON.parse(JSON.stringify(data.Studios)).map((item: any) => {
        return item;
      });
      console.log(this.dataList[10]);
    });
  }
}
