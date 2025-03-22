import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';
import { StudioService } from '../../services/studio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../filter.pipe';
import { AppointmentFormComponent } from "../appointment-form/appointment-form.component";

@Component({
  selector: 'app-studio-list',
  imports: [CommonModule, FormsModule, FilterPipe, AppointmentFormComponent],
  templateUrl: './studio-list.component.html',
  styleUrl: './studio-list.component.css'
})

export class StudioListComponent {
  dataList: any = [];
  searchText: any;

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
