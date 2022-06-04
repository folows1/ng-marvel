import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'env';
import { IItem } from '../item';
import { HerokuService } from 'src/heroku.service';

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {

  creators: IItem[] = [];
  API_KEY = '';

  constructor(private http: HttpClient,
    private heroku: HerokuService) {
    this.heroku.fetch().subscribe(data => {
      this.API_KEY = data;
      this.get100Creators();
    },
      error => {
        /* this.API_KEY = error.text; */
        this.get100Creators();
    })
  }

  options = {
    headers: {
      'Accept': '*/*',
    }
  };

  getCreators(): IItem[] {
    return this.creators;
  }

  /**
   * Get creators from Marvel API
   * @returns {Observable<any>}
   * @memberof MarvelService
   * @params {number} offset - offset for pagination
   * @params {string} info - info to pass to the API
   * */
  fetchCreators(): Observable<any> {
    const url = `${environment.API_URL}creators?limit=100${this.API_KEY}`;
    console.log('requesting creators');
    return this.http.get(url, this.options);
  }


  /**
   * Get creators from Marvel API
   * @returns {void}
   * @memberof CharactersComponent
   * */
  get100Creators() {
    this.fetchCreators().subscribe(data => {
      const response = (data['data']['results']) as IItem[];
      response.forEach((creator, index) => {
        this.creators[index] = creator;
      });
    });
  }
}
