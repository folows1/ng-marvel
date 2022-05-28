import { AfterViewInit, Component } from '@angular/core';
import { IItem } from '../item';
import { CreatorsService } from './creators.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['../characters/characters.component.css']
})
export class CreatorsComponent implements AfterViewInit {
  isLoading: boolean;
  creators: IItem[] = [];

  constructor(private service: CreatorsService) {
    this.isLoading = true;
    this.creators = this.service.getCreators();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log('loaded');
      this.isLoading = false;
    }, 1500);
  }

}
