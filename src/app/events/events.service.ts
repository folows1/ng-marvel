import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'env';
import { IItem } from '../item';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: IItem[] = [];

  constructor(private http: HttpClient) {
    this.get100Events();
  }

  options = {
    headers: {
      'Accept': '*/*',
    }
  };

  getEvents(): IItem[] {
    return this.events;
  }

  /**
   * Get events from Marvel API
   * @returns {Observable<any>}
   * @memberof MarvelService
   * */
  fetchEvents(): Observable<any> {
    const url = `${environment.API_URL}events?limit=100${environment.API_KEY}`;
    console.log('requesting events');
    return this.http.get(url, this.options);
  }


  /**
   * Get events from Marvel API
   * @returns {void}
   * @memberof CharactersComponent
   * */
  get100Events() {
    this.fetchEvents().subscribe(data => {
      const response = (data['data']['results']) as IItem[];
      response.forEach((event, index) => {
        this.events[index] = event;
      });
    });
  }
}
