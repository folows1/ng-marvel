import { AfterViewInit, Component } from '@angular/core';
import { IItem } from '../item';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['../characters/characters.component.css']
})
export class EventsComponent implements AfterViewInit {
  isLoading: boolean;
  events: IItem[] = [];

  constructor(private service: EventsService) {
    this.isLoading = true;
    this.events = this.service.getEvents();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log('loaded');
      this.isLoading = false;
    }, 1000);
  }

}
