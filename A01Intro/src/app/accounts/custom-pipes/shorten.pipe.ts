import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, start: number, end: number) {
    if (value.length > 9) {
      return value.substr(start, end) + '...';
    }
    return value;
  }
}
