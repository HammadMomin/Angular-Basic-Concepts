import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertUsdInr'
})
export class ConvertUsdInrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x] = args;
    return value*x;
  }

}
