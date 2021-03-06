import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { NewAnimalComponent } from './new-animal/new-animal.component';

import { MaxAgePipe } from './max-age.pipe';
import { MinAgePipe } from './min-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    EditAnimalComponent,
    NewAnimalComponent,
    MaxAgePipe,
    MinAgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
