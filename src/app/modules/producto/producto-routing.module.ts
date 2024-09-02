import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LabialesComponent } from './pages/labiales/labiales.component';


const routes: Routes = [
  {path:"labiales", component:LabialesComponent},
  
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { 

}
