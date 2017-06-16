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
  maximumAge: number = 100
  minimumAge: number = 0

  constructor(private animalService: AnimalService) { };

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal
  }

  doneEditing() {
    this.selectedAnimal = null
  }

  setMaxAge(age) {
    this.maximumAge = age
  }

  setMinAge(age) {
    this.minimumAge = age
  }
  ngOnInit(): void {
    this.animalService.getAnimals().then(animals => this.animals = animals)
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.animals.push(newAnimalFromChild)
  }
}
