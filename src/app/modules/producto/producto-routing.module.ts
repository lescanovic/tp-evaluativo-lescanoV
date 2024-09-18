import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LabialesComponent } from './pages/labiales/labiales.component';
import { RuboresComponent } from './pages/rubores/rubores.component';
import { IluminadorComponent } from './pages/iluminador/iluminador.component';
import { PolvosComponent } from './pages/polvos/polvos.component';
import { ContornoComponent } from './pages/contorno/contorno.component';
import { BasesComponent } from './pages/bases/bases.component';
import { CorrectorComponent } from './pages/corrector/corrector.component';


const routes: Routes = [
  
  {path:"Labiales", component:LabialesComponent},
  {path:"Rubores", component:RuboresComponent},
  {path:"Iluminador", component:IluminadorComponent},
  {path:"Polvos", component:PolvosComponent},
  {path:"Contorno", component:ContornoComponent},
  {path:"Bases", component:BasesComponent},
  {path:"Corrector", component:CorrectorComponent},
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { 

}
