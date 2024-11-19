import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-sombras',
  templateUrl: './sombras.component.html',
  styleUrls: ['./sombras.component.css']
})
export class SombrasComponent {
  public info: Producto [] 
  
  constructor(public crudService: CrudService){
  
    this.info = [
      {
        uid:"",
        nombre:"Paleta de sombras Pink 21",
        tono:"",
        imagen:"./assets/imagenes/sombra1.jpg",
        alt:"12 Tonos de colores, metalizados y matte",
        precio: 2500,
        stock: 0
      
      },
      {
        uid:"",
        nombre:"Paleta de sombras pink 21",
        tono:"",
        imagen:"./assets/imagenes/sombra2.webp",
        alt:"3 tonos primaverales",
        precio: 4000,
        stock: 0
      
      },     {
        uid:"",
        nombre:"Paleta de sombras pink 21",
        tono:"",
        imagen:"./assets/imagenes/sombra3.jpeg",
        alt:"4 tonos de colores, metalizados y matte",
        precio: 4500,
        stock: 0
      
      },
      {
        uid:"",
        nombre:"Sombras de Ruby Rose",
        tono:"",
        imagen:"./assets/imagenes/sombra4.png",
        alt:"18 tonos de colores, metalizados, mate y tornasolados",
        precio: 7000,
        stock: 0
      
      },
      {
        uid:"",
        nombre:"Sombras de Melu",
        tono:"",
        imagen:"./assets/imagenes/sombra5.webp",
        alt:"12 tonos distintos de la paleta nueva de la marca Melu, pigmentacion media",
        precio: 6500,
        stock: 0
      
      },
      {
        uid:"",
        nombre:"Paleta de sombras de Mely",
        tono:"",
        imagen:"./assets/imagenes/sombra6.webp",
        alt:"4 tonos de sombras de la marca Mely, pigmentancion media-alta",
        precio: 3000,
        stock: 0
      
      },
      {
        uid:"",
        nombre:"Sombras de Vhermosa",
        tono:"",
        imagen:"./assets/imagenes/sombra7.jpeg",
        alt:"9 colores de sombras, tonos primaverales y veraniles",
        precio: 5000,
        stock: 0
      
      },
      {
        uid:"",
        nombre:"Paleta de sombras de Ormromra",
        tono:"",
        imagen:"./assets/imagenes/sombra8.webp",
        alt:"9 tonos de sombras, brillos y sombras matte pigmentados ",
        precio: 6500,
        stock: 0
      
      },
      {
        uid:"",
        nombre:"Paleta de sombras de Revlon",
        tono:"",
        imagen:"./assets/imagenes/sombra9.webp",
        alt:"Paleta de sombras para uso profesional,4 tonos, pigmentacion alta,",
        precio: 8000,
        stock: 0
      
      },
    ]
  }
}
