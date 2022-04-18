import { Pipe, PipeTransform } from '@angular/core';
import { IThumb } from './characters/character';

@Pipe({
  name: 'imagePipe'
})
export class ImagePipePipe implements PipeTransform {

  /**
   * Transform the image path to valid URL
   * @param {string} url
   * @returns {string}
   * @memberof ImagePipePipe
   * */
  transform(value: IThumb, imgType: string): string {
    return `${value.path}/${imgType}.${value.extension}`;
  }

}
