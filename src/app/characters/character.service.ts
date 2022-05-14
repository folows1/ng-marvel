import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IItem } from '../item';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characters: IItem[] = [];

  constructor(private http: HttpClient) {
    this.getAllCharacters();
  }

  options = {
    headers: {
      'Accept': '*/*',
    }
  };

  getCharacters(): IItem[] {
    return this.characters;
  }

  /**
   * Get characters from Marvel API
   * @returns {Observable<any>}
   * @memberof MarvelService
   * @params {number} offset - offset for pagination
   * @params {string} info - info to pass to the API
   * */
  fetchCharacters(offset: number): Observable<any> {
    const url = `${environment.API_URL}characters?limit=100&offset=${offset}${environment.API_KEY}`;
    console.log('requesting characters');
    return this.http.get(url, this.options);
  }

  /**
   * Get characters from Marvel API
   * @returns {void}
   * @memberof CharactersComponent
   * */
  getAllCharacters() {
    for (let i = 0; i <= 15; i++) {
      this.fetchCharacters(i * 100).subscribe(data => {
        const response = (data['data']['results']) as IItem[];
        response.forEach((character, index) => {
          this.characters[i * 100 + index] = character;
        });
      });
    }
  }
}
