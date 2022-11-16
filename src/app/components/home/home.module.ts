import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './../../shared/material.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule, 
    MaterialModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatIconModule,
    FormsModule
  ]
})
export class HomeModule { }
