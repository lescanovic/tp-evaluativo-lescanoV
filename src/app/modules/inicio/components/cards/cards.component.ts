import { Component } from '@angular/core';
import { Oferta } from 'src/app/models/oferta';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {  
 
  public info: Oferta[] ;
  constructor(public crudService: CrudService){
  this.info = [
    
    {
      uid:"",
      nombre:"Polvo Fenty Beauty",
      imagen:"./assets/imagenes/polvo1.jpg",
      tono:"",
      alt:"Alta cobertura",
      precio:8900,
      precio2:7500
    },
    {
      uid:"",
      nombre:"Base de Maybelline",
      imagen:"./assets/imagenes/base.jpg",
      tono:"",
      alt:"Alta cobertura",
      precio:9800,
      precio2:8000
    },
    {
      uid:"",
      nombre:"Labial Avon",
      imagen:"./assets/imagenes/labial.jpg",
      tono:"",
      alt:"Alta cobertura",
      precio:1400,
      precio2:10000
    },
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
      alt:"Balsamo labial evita la resequedad y cura heridas",
      precio:6500,
      precio2:4500
    },
    {
      uid:"",
      nombre:"Manteca de cacao Nivea",
      imagen:"./assets/imagenes/oferta3.jpg",
      tono:"Red",
      alt:"Balsamo labial evita la resequedad y cura heridas",
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
   
  ]
  
  
  
  }

}
