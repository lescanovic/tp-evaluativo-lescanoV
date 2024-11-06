import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import  {MatTableModule} from '@angular/material/table'
import { FormsModule } from '@angular/forms';

import { CarritoRoutingModule } from './carrito-routing.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    FormsModule
  ],
  exports:[
    MatTableModule,
    MatIconModule,
    FormsModule
  ]
})
export class CarritoModule { }
