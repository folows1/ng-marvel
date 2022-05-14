import { AfterViewInit, Component } from '@angular/core';
import { CharacterService } from './character.service';
import { IItem } from '../item';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements AfterViewInit {
  isLoading: boolean;
  p: number = 1;
  characters: IItem[] = [];

  constructor(private service: CharacterService) {
    this.isLoading = true;
    this.characters = this.service.getCharacters();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log('loaded');
      this.isLoading = false;
    }, 2500);
  }
}
