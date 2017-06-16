import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './shared/animal.model'

@Pipe({
  name: 'maxAge',
  pure: false
})

export class MaxAgePipe implements PipeTransform {

  transform(input: Animal[], maxAge: number): any {
    var output: Animal[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].age < maxAge) {
        output.push(input[i])
      }
    }
    return output
  }
}
