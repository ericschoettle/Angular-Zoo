import { Injectable } from '@angular/core';

import { ANIMALS } from './existing-animals';

@Injectable()
export class AnimalsService {
  getAnimals() {
    return Promise.resolve(ANIMALS);
  }
}
