import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './shared/animal.model'

@Pipe({
  name: 'minAge',
  pure: false
})
export class MinAgePipe implements PipeTransform {

  transform(input: Animal[], minAge: number): any {
    var output: Animal[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].age > minAge) {
        output.push(input[i])
      }
    }
    return output
  }

}
