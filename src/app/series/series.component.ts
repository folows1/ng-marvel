import { Component, OnInit } from '@angular/core';
import { IItem } from '../item';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['../characters/characters.component.css']
})
export class SeriesComponent {

  series: IItem[] = [];

  constructor(private service: SeriesService) {
    this.series = this.service.getSeries();
  }

}
