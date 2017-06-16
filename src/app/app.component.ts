import { Component, OnInit } from '@angular/core';

import { Animal } from './shared/animal.model'
import { AnimalService } from './shared/animal.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AnimalService ]
})

export class AppComponent implements OnInit {
  animals: Animal[] = [];
  selectedAnimal: Animal = null

  constructor(private animalService: AnimalService) { };

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal
  }

  doneEditing() {
    debugger
    this.selectedAnimal = null
  }
  ngOnInit(): void {
    this.animalService.getAnimals().then(animals => this.animals = animals)
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.animals.push(newAnimalFromChild)
  }
}
