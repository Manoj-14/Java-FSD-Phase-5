import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const result = [];
    for (let item of value) {
      // if (item[propName] ===  filterString ) {
      if (item[propName].includes(filterString)) {
        result.push(item);
      }
    }
    return result;
  }
}
