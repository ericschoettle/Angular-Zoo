import { Injectable } from '@angular/core';

import { Animal } from './animal.model';
import { ANIMALS } from './existing-animals';

@Injectable()
export class AnimalService {
  getAnimals(): Promise<Animal[]> {
    return Promise.resolve(ANIMALS);
  }
}
