import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) { }

  options = {
    headers: {
      'Accept': '*/*',
    }
  };

  /**
   * Get characters from Marvel API
   * @returns {Observable<any>}
   * @memberof MarvelService
   * @params {number} offset - offset for pagination
   * @params {string} info - info to pass to the API
   * */
  getList(info: string, offset: number): Observable<any> {
    const url = `${environment.API_URL}${info}?limit=100&offset=${offset}${environment.API_KEY}`;
    return this.http.get(url, this.options);
  }
}
