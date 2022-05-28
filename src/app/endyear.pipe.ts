import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'endyear'
})
export class EndyearPipe implements PipeTransform {

  transform(endYear: number): string {
    if (endYear && endYear === 2099) {
      return 'On going series';
    }
    return endYear.toString();
  }

}
