import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {  
  public info: Usuario [] ;
constructor(){
this.info = [
  {
    id:"",
    nombre:" Base de Maquillaje Maybelline",
    tono:"30H",
    imagen:"./assets/imagenes/base.jpg",
    alt:"Alta cobertura",
    precio: 9.800
  
  },
  {
    id:"",
    nombre:"Labial Avon",
    tono:"Velvet",
    imagen:"./assets/imagenes/labial.jpg",
    alt:"Labial cremoso",
    precio: 14.000
  
  },

  {
    id:"",
    nombre:"Polvo Fenty Beauty",
    tono:"30H",
    imagen:"./assets/imagenes/polvo1.jpg",
    alt:"Alta cobertura",
    precio: 8.900
  
  },
 
  
]



}
}
