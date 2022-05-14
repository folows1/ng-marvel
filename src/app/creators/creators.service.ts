import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IItem } from '../item';

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {

  creators: IItem[] = [];

  constructor(private http: HttpClient) {
    this.get100Creators();
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
    const url = `${environment.API_URL}creators?limit=100${environment.API_KEY}`;
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
