import { Component } from '@angular/core';
import { IItem } from '../item';
import { ComicsService } from './comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['../characters/characters.component.css']
})
export class ComicsComponent {

  comics: IItem[] = [];

  constructor(private service: ComicsService) {
    this.comics = this.service.getComics();
  }

  /* ngAfterViewInit() {
    setTimeout(() => {
      console.log('loaded');
      this.isLoading = false;
    }, 1500);
  } */

}
