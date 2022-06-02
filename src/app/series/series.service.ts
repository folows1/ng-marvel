import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'env';
import { IItem } from '../item';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  series: IItem[] = [];

  constructor(private http: HttpClient) {
    this.get100Series();
  }

  options = {
    headers: {
      'Accept': '*/*',
    }
  };

  getSeries(): IItem[] {
    return this.series;
  }

  /**
   * Get series from Marvel API
   * @returns {Observable<any>}
   * @memberof MarvelService
   * @params {number} offset - offset for pagination
   * @params {string} info - info to pass to the API
   * */
  fetchseries(): Observable<any> {
    const url = `${environment.API_URL}series?limit=100${environment.API_KEY}`;
    console.log('requesting series');
    return this.http.get(url, this.options);
  }


  /**
   * Get series from Marvel API
   * @returns {void}
   * @memberof CharactersComponent
   * */
  get100Series() {
    this.fetchseries().subscribe(data => {
      const response = (data['data']['results']) as IItem[];
      response.forEach((serie, index) => {
        this.series[index] = serie;
      });
    });
  }

}
