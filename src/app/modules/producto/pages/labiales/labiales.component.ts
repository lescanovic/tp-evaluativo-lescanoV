import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-labiales',
  templateUrl: './labiales.component.html',
  styleUrls: ['./labiales.component.css']
})
export class LabialesComponent {
  public info: Producto [] ;
  constructor(){
  this.info = [
    {
      uid:"",
      nombre:"Labial Paradise Gloss ",
      tono:"Porcelain Petal",
      imagen:"./assets/imagenes/labial1.jpg",
      alt:"Gloss Hidratante",
      precio: 9800
    
    },
    {
      uid:"",
      nombre:"Labial Color Riche",
      tono:"346 Rouge Determin",
      imagen:"./assets/imagenes/labial2.jpg",
      alt:"Labial cremoso",
      precio: 14000
    
    },
  
    {
      uid:"",
      nombre:"Labial Paradise",
      tono:"107",
      imagen:"./assets/imagenes/labial3.jpg",
      alt:"Balsamo",
      precio: 25000
    
    },
    {
      uid:"",
      nombre:"Labial Paradise",
      tono:"107",
      imagen:"./assets/imagenes/labial4.jpeg",
      alt:"Balsamo",
      precio: 25000
    
    },
    {
      uid:"",
      nombre:"Labial Paradise",
      tono:"107",
      imagen:"./assets/imagenes/labial5.jpg",
      alt:"Balsamo",
      precio: 25000
    
    },
    
    {
      uid:"",
      nombre:"Labial Paradise",
      tono:"107",
      imagen:"./assets/imagenes/labial6.jpg",
      alt:"Balsamo",
      precio: 25000
    
    },
    
    {
      uid:"",
      nombre:"Labial Paradise",
      tono:"107",
      imagen:"./assets/imagenes/labial7.jfif",
      alt:"Balsamo",
      precio: 25000
    
    },
    

    {
      uid:"",
      nombre:"Labial Paradise",
      tono:"107",
      imagen:"./assets/imagenes/labial8.jpg",
      alt:"Balsamo",
      precio: 25000
    
    },
    {
      uid:"",
      nombre:"Labial Paradise",
      tono:"107",
      imagen:"./assets/imagenes/labial9.jpg",
      alt:"Balsamo",
      precio: 25000
    
    },
    {
      uid:"",
      nombre:"Labial Paradise",
      tono:"107",
      imagen:"./assets/imagenes/labial10.jpg",
      alt:"Balsamo",
      precio: 25000
    
    },
    
    
    

  
    
  ]
  
  
  
  }
}
