import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { LabialesComponent } from './pages/labiales/labiales.component';
import { RuboresComponent } from './pages/rubores/rubores.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    LabialesComponent,
    RuboresComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProductoModule { }
