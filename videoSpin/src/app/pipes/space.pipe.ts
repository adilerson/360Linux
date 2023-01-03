import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'space',
})
export class SpacePipe implements PipeTransform {
  transform(value: any): any {
    if (value === undefined) {
      return 'undefined';
    }
    return value.replace('_', ' ');
  }
}
