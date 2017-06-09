# Zoo

This application allows a user to keep track of animals at a zoo. It has basic CRUD functionality for animals at the zoo. 

## Goals
  ### MVP

  * Animals class will reside in animal.model.ts and contain fields for species, name, age, diet, location, caretakers (number), sex, likes, and dislikes. 
  * "Existing animals" will seed the database with three animals.
  * Animal List component will allow user to see all animals in the zoo.
    * Animal List component will have an edit button allowing users to edit animals. 
  * Animal Edit component will allow users to edit animals using two-way data binding. 
  * Animal Form component will allow users to input new animals
  * Young and Old buttons will use pipes to list animals by age. 
  
  ### Further goals

  * Search function will allow animals to be sorted by age, location, etc. Backend will have multiple pipes to allow this.
  * Animals List component will list only name and species - clicking will reveal more details on a separate page. 
  * New entries will be timestamped and age will be calculated relative to timestamp.
    * Upcoming birthday's feature will list any animals with upcoming birthdays. Because who would't want to go to a Giraffe's birthday party? 
  * Data will be stored in Firebase. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Technologies used

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
