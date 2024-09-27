import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-bases',
  templateUrl: './bases.component.html',
  styleUrls: ['./bases.component.css']
})
export class BasesComponent {
  public info : Producto [];
  constructor(){
    this.info = [
      {
        uid:"",
        nombre:"Base de Loreal",
        tono:"09",
        imagen:"./assets/imagenes/base1.png",
        alt:"Base líquida con acabado luminoso con durabiliadad de 24 Horas ",
        precio: 30000
      
      },
      {
        uid:"",
        nombre:"Base REVLON ",
        tono:"04",
        imagen:"./assets/imagenes/base2.png",
        alt:"Base líquida con acabado mate, cobertura media-alta",
        precio: 25000
      
      },
      {
        uid:"",
        nombre:"Base Clinique",
        tono:"06",
        imagen:"./assets/imagenes/base3.avif",
        alt:"Base liquida con aplicador, luminosa",
        precio: 15000
      
      },
      {
        uid:"",
        nombre:"Base NARS",
        tono:"08",
        imagen:"./assets/imagenes/base4.jpg",
        alt:"Base liquida luminosa, con acabado muy natural",
        precio: 20000
      
      },
    ]
  }
}