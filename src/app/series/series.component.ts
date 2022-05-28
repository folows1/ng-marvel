import { AfterViewInit, Component } from '@angular/core';
import { IItem } from '../item';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['../characters/characters.component.css']
})
export class SeriesComponent implements AfterViewInit {
  isLoading: boolean;
  series: IItem[] = [];

  constructor(private service: SeriesService) {
    this.isLoading = true;
    this.series = this.service.getSeries();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log('loaded');
      this.isLoading = false;
    }, 1500);
  }

}
