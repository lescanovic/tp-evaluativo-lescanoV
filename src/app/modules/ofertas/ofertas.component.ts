import { Component } from '@angular/core';
import { Oferta } from 'src/app/models/oferta';
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent {
public info: Oferta[];
constructor(){
  this.info = [
    {
      uid:"",
      nombre:"Manteca de cacao Nivea",
      imagen:"./assets/imagenes/oferta1.jpg",
      tono:"Rose pink",
      alt:"Balsamo labial evita la resequedad y cura heridas",
      precio:6500,
      precio2:4500
    },
    {
      uid:"",
      nombre:"Manteca de cacao Nivea",
      imagen:"./assets/imagenes/oferta2.jpg",
      tono:"Cherry",
      alt:"",
      precio:6500,
      precio2:4500
    },
    {
      uid:"",
      nombre:"Manteca de cacao Nivea",
      imagen:"./assets/imagenes/oferta3.jpg",
      tono:"Red",
      alt:"",
      precio:6500,
      precio2:4500
    },
    {
      uid:"",
      nombre:"Perfume de Violetta, fragancia a jazmin",
      imagen:"./assets/imagenes/oferta4.jpg",
      tono:"",
      alt:"",
      precio:15400,
      precio2:10000
    },
    {
      uid:"",
      nombre:"Lapiz de ceja Avon, linea Power Stay",
      imagen:"./assets/imagenes/oferta5.jpg",
      tono:"Negro",
      alt:"",
      precio:5000,
      precio2:3000
    },
    {
      uid:"",
      nombre:"Paleta de sombras de Ruby Rose",
      imagen:"./assets/imagenes/oferta6.png",
      tono:"",
      alt:"10 tonos de sombras, tornasoladas y matte",
      precio:7850,
      precio2:6350
    },
    {
      uid:"",
      nombre:"Base liquida de Ruby Rose",
      imagen:"./assets/imagenes/oferta7.jpg",
      tono:"",
      alt:"",
      precio:212,
      precio2:43
    },{
      uid:"",
      nombre:"Base Liquida de Melu",
      imagen:"./assets/imagenes/oferta8.jpg",
      tono:"",
      alt:"",
      precio:212,
      precio2:43
    
    },
    {
      uid:"",
      nombre:"Paleta de rubor, contorno e iluminador de Melu",
      imagen:"./assets/imagenes/oferta9.webp",
      tono:"",
      alt:"",
      precio:8900,
      precio2:7800
    },
    {
      uid:"",
      nombre:"Polvo Traslúcido Pink 21",
      imagen:"./assets/imagenes/oferta10.webp",
      tono:"",
      alt:"",
      precio:6650,
      precio2:3900
    },
   
    {
      uid:"",
      nombre:"Rubor de Pink 21",
      imagen:"./assets/imagenes/oferta12.jpeg",
      tono:"",
      alt:"",
      precio:3000,
      precio2:1500
    },
    {
      uid:"",
      nombre:"Rubor de Pink 21",
      imagen:"./assets/imagenes/oferta13.jpeg",
      tono:"",
      alt:"",
      precio:3000,
      precio2:1500
    },
 

  ]
}

}
