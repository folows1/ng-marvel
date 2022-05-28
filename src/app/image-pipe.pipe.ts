import { Pipe, PipeTransform } from '@angular/core';
import { IThumb } from './thumb';

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
  transform(value: IThumb | undefined, imgType: string): string {
    if (value) {
    return `${value.path}/${imgType}.${value.extension}`;
    }
    return '';
  }

}
