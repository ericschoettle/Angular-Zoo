import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './shared/animal.model'

@Pipe({
  name: 'age',
  pure: false
})

export class AgePipe implements PipeTransform {

  transform(input: Animal[], maxAge = 4): any {
    var output: Animal[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].age < maxAge) {
        output.push(input[i])
      }
    }
    return output
  }
}
