import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    if (value.length > 9) {
      return value.substr(0, 9) + '...';
    }
    return value;
  }
}
