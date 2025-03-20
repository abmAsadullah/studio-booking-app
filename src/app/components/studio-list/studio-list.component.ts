import { Component } from '@angular/core';
import { StudioService } from '../../services/studio.service';

@Component({
  selector: 'app-studio-list',
  imports: [],
  templateUrl: './studio-list.component.html',
  styleUrl: './studio-list.component.css'
})
export class StudioListComponent {
  dataList: any = [];

  constructor(private studioService: StudioService) { }

  ngOnInit(): void {
    this.loadData();
    console.log(this.dataList);
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
