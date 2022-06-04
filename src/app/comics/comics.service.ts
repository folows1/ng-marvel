import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'env';
import { IItem } from '../item';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {
  comics: IItem[] = [];


  constructor(private http: HttpClient) {
    this.get100Comics();
  }

  options = {
    headers: {
      'Accept': '*/*',
    }
  };

  getComics(): IItem[] {
    return this.comics;
  }

  /**
   * Get comics from Marvel API
   * @returns {Observable<any>}
   * @memberof MarvelService
   * @params {number} offset - offset for pagination
   * @params {string} info - info to pass to the API
   * */
  fetchComics(): Observable<any> {
    const url = `${environment.API_URL}comics?limit=100${environment.API_KEY}`;
    console.log('requesting comics');
    return this.http.get(url, this.options);
  }


  /**
   * Get comics from Marvel API
   * @returns {void}
   * @memberof CharactersComponent
   * */
  get100Comics() {
    this.fetchComics().subscribe(data => {
      const response = (data['data']['results']) as IItem[];
      response.forEach((comic, index) => {
        this.comics[index] = comic;
      });
    });
  }
}
