import { Component, Input, OnInit } from '@angular/core';

import { Animal } from '../shared/animal.model'

@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})

export class EditAnimalComponent implements OnInit {
  @Input() animal: Animal;
  
  constructor() { }

  ngOnInit() {
  }

}
