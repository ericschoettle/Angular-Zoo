import { Component, Input, OnInit } from '@angular/core';

import { Animal } from '../shared/animal.model'

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})

export class AnimalListComponent implements OnInit {
  @Input() animal: Animal;

  constructor() { }

  ngOnInit() {
  }

}
