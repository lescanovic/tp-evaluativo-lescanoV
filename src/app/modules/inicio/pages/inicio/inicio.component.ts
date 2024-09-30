import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info: Producto [] ;
  constructor(){
  this.info = [
    {
      uid:"",
      nombre:" Base de Maybelline",
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
      tono:"Yellow",
      imagen:"./assets/imagenes/polvo1.jpg",
      alt:"Alta cobertura",
      precio: 8900
    
    },
    
    
  ]
  
  
  
  }
}
