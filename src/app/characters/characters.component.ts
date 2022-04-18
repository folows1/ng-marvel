import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service';
import { ICharacter } from './character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  isLoading: boolean = true;
  p: number = 1;
  characters: ICharacter[] = [];

  constructor(private marvel: MarvelService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  /**
   * Get characters from Marvel API
   * @returns {void}
   * @memberof CharactersComponent
   * */
  getCharacters() {
    for (let i = 0; i <= 15; i++) {
      this.marvel.getList('characters', i * 100).subscribe(data => {
        const response = (data['data']['results']) as ICharacter[];
        response.forEach((character, index) => {
          this.characters[i * 100 + index] = character;
          if (i === 15 && character.thumbnail !== undefined) {
            this.isLoading = false;
          }
        });
      });
    }
  }
}
