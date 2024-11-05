import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-labiales',
  templateUrl: './labiales.component.html',
  styleUrls: ['./labiales.component.css']
})
export class LabialesComponent {
  public info: Producto [] ;
  constructor(public crudService : CrudService){
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
      tono:"Latte Mocca",
      imagen:"./assets/imagenes/labial4.jpeg",
      alt:"Labial Mate con acabado luminoso",
      precio: 15000
    
    },
    {
      uid:"",
      nombre:"Labial Paradise",
      tono:"Live Red",
      imagen:"./assets/imagenes/labial5.jpg",
      alt:"Labial Mate con acabado luminoso",
      precio: 15000
    
    },
    
    {
      uid:"",
      nombre:"Labial Paradise",
      tono:"Skin",
      imagen:"./assets/imagenes/labial6.jpg",
      alt:"Labial mate con acabado luminoso",
      precio: 15000
    
    },
    
    {
      uid:"",
      nombre:"Labial Paradise",
      tono:"Peach",
      imagen:"./assets/imagenes/labial7.jfif",
      alt:"Laial mate con acabado luminoso",
      precio: 15000
    
    },
    

    {
      uid:"",
      nombre:"Labial Avon",
      tono:"Red Velvet",
      imagen:"./assets/imagenes/labial8.jpg",
      alt:"Labial creomoso hidratante",
      precio: 4000
    
    },
    {
      uid:"",
      nombre:"Labial Avon",
      tono:"Mocca clasico",
      imagen:"./assets/imagenes/labial9.jpg",
      alt:"Labial Mate",
      precio: 4000
    
    },
    {
      uid:"",
      nombre:"Labial Avon",
      tono:"Sweet red",
      imagen:"./assets/imagenes/labial10.jpg",
      alt:"Labial mentolado cremoso",
      precio: 5000
    
    },
    
    
    

  
    
  ]
  
  
  
  }
}
