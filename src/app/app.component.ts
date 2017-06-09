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
  debugger
  constructor(private animalService: AnimalService) { };

  ngOnInit(): void {
    this.getAnimals()
  }
  getAnimals(): void {
    this.animalService.getAnimals().then(animals => this.animals = animals)
  }
}
