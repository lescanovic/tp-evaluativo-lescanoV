import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {  
  public info: Producto [] ;
constructor(){
this.info = [
  {
    uid:"",
    nombre:" Base de Maquillaje Maybelline",
    tono:"30H",
    imagen:"./assets/imagenes/base.jpg",
    alt:"Alta cobertura",
    precio: 9800
  
  },
  {
    uid:"",
    nombre:"Labial Avon",
    tono:"Velvet",
    imagen:"./assets/imagenes/labial.jpg",
    alt:"Labial cremoso",
    precio: 14000
  
  },

  {
    uid:"",
    nombre:"Polvo Fenty Beauty",
    tono:"30H",
    imagen:"./assets/imagenes/polvo1.jpg",
    alt:"Alta cobertura",
    precio: 8900
  
  },
 
  
]



}
}
