import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

import { LabialesComponent } from './modules/producto/pages/labiales/labiales.component';
import { BasesComponent } from './modules/producto/pages/bases/bases.component';
import { ContornoComponent } from './modules/producto/pages/contorno/contorno.component';
import { IluminadorComponent } from './modules/producto/pages/iluminador/iluminador.component';
import { RuboresComponent } from './modules/producto/pages/rubores/rubores.component';
import { PolvosComponent } from './modules/producto/pages/polvos/polvos.component';
import { CorrectorComponent } from './modules/producto/pages/corrector/corrector.component';
import { SobrenosotrosComponent } from './modules/sobrenosotros/sobrenosotros.component';

import { ContactoComponent } from './modules/contacto/contacto.component';
import { PerfumeriaComponent } from './modules/producto/pages/perfumeria/perfumeria.component';
import { SombrasComponent } from './modules/producto/pages/sombras/sombras.component';


const routes: Routes = [
  //Rutas Hijas
  {path:"",component: InicioComponent,},
  {path:"Labiales",component:LabialesComponent},
  {path:"Perfumeria",component:PerfumeriaComponent},
  {path:"Bases",component:BasesComponent},
  {path:"Contorno",component:ContornoComponent},
  {path:"Iluminador",component:IluminadorComponent},
  {path:"Rubores",component:RuboresComponent},
  {path:"Polvos",component:PolvosComponent},
  {path:"Correctores",component:CorrectorComponent},
  {path:"Sobrenosotros",component:SobrenosotrosComponent},
  {path:"Sombras",component:SombrasComponent},
  {path:"Contacto",component:ContactoComponent},



  /*Una carga perezosa se activa únicamente cuando el usuario navega a 
  la sección correspondiente, como "inicio" o "admin". Hasta ese momento,
   el módulo relacionado no se carga en la memoria del navegador, */
//Rutas de carga perezosa, renderizan los modulos ()
  {path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)},
  {
    path:"",loadChildren:()=>import('./modules/carrito/carrito.module').then(m=>m.CarritoModule)
  },
  {path:"",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)},
  {path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)},
  {path:"",loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
