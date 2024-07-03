import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabialesComponent } from './pages/labiales/labiales.component';
import { RuboresComponent } from './pages/rubores/rubores.component';

const routes: Routes = [
  {path:"labiales", component:LabialesComponent},
  {path:"rubores",component:RuboresComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { 

}
