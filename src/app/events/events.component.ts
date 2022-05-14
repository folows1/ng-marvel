import { Component, OnInit } from '@angular/core';
import { IItem } from '../item';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['../characters/characters.component.css']
})
export class EventsComponent {

  events: IItem[] = [];

  constructor(private service: EventsService) {
    this.events = this.service.getEvents();
  }

}
