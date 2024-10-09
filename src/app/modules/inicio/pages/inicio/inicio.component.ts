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
    {
      uid:"",
      nombre:"Paleta de rostro Melu 4 en 1",
      tono:"",
      imagen:"./assets/imagenes/oferta9.webp",
      alt:"",
      precio: 6500
    
    },
    {
      uid:"",
      nombre:"Base liquida Melu",
      tono:"08",
      imagen:"./assets/imagenes/oferta8.jpg",
      alt:"",
      precio: 6350
    
    },
    
    {
      uid:"",
      nombre:"Base liquida Ruby Rose",
      tono:"07",
      imagen:"./assets/imagenes/oferta7.jpg",
      alt:"",
      precio: 7000
    
    },
    
    
    {
      uid:"",
      nombre:"Paleta de Ojos Ruby Rose",
      tono:"Calidos y Marrones",
      imagen:"./assets/imagenes/oferta6.png",
      alt:"",
      precio: 5000
    
    },

    {
      uid:"",
      nombre:"Lapiz de ceja Avon",
      tono:"Negro",
      imagen:"./assets/imagenes/oferta5.jpg",
      alt:"",
      precio: 4500
    
    },

    {
      uid:"",
      nombre:"Perfume de Violetta",
      tono:"",
      imagen:"./assets/imagenes/oferta4.jpg",
      alt:"",
      precio: 8900
    
    },

    {
      uid:"",
      nombre:"Balsamo de labios Nivea",
      tono:"Tono: Red",
      imagen:"./assets/imagenes/oferta3.jpg",
      alt:"",
      precio: 5500
    
    },
    {
      uid:"",
      nombre:"Balsamo de labios Nivea",
      tono:"Cherry",
      imagen:"./assets/imagenes/oferta2.jpg",
      alt:"",
      precio: 5500
    
    },
    {
      uid:"",
      nombre:"Balsamo de labios Nivea",
      tono:"Pink",
      imagen:"./assets/imagenes/oferta1.jpg",
      alt:"",
      precio: 5500
    
    },
  ]
  
  
  
  }
}
