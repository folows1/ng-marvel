import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
   * Get comics from Marvel API
   * @returns {Observable<any>}
   * @memberof MarvelService
   * @params {number} offset - offset for pagination
   * @params {string} info - info to pass to the API
   * */
  fetchEvents(): Observable<any> {
    const url = `${environment.API_URL}events?limit=100${environment.API_KEY}`;
    console.log('requesting comics');
    return this.http.get(url, this.options);
  }


  /**
   * Get comics from Marvel API
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
