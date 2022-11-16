import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule }   from '@angular/forms';

const modules = [
  MatCardModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ...modules
  ], 
  exports: [
    ...modules,
    FormsModule,
  ]
})
export class MaterialModule { }
