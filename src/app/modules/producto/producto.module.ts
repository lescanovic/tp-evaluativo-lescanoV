import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { LabialesComponent } from './pages/labiales/labiales.component';


import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RuboresComponent } from './pages/rubores/rubores.component';
import { BasesComponent } from './pages/bases/bases.component';
import { CorrectorComponent } from './pages/corrector/corrector.component';
import { PolvosComponent } from './pages/polvos/polvos.component';
import { ContornoComponent } from './pages/contorno/contorno.component';
import { IluminadorComponent } from './pages/iluminador/iluminador.component';
import { PerfumeriaComponent } from './pages/perfumeria/perfumeria.component';


@NgModule({
  declarations: [
    LabialesComponent,
    RuboresComponent,
    BasesComponent,
    CorrectorComponent,
    PolvosComponent,
    ContornoComponent,
    IluminadorComponent,
    PerfumeriaComponent

   

  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProductoModule { }
