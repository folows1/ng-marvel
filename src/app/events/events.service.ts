import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'env';
import { IItem } from '../item';
import { HerokuService } from 'src/heroku.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: IItem[] = [];
  API_KEY = ''

  constructor(private http: HttpClient,
    private heroku: HerokuService) {
    this.heroku.fetch().subscribe(data => {
      this.API_KEY = data;
      this.get100Events();
    })
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
    const url = `${environment.API_URL}events?limit=100${this.API_KEY}`;
    console.log('requesting events');
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
