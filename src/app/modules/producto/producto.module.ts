import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { LabialesComponent } from './pages/labiales/labiales.component';


import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    LabialesComponent
   

  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProductoModule { }
