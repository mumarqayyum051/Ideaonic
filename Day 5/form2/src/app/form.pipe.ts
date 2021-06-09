import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqrtpipe',
})
export class SquarePipe implements PipeTransform {
  transform(value: number): number {
    return value * value;
  }
}
