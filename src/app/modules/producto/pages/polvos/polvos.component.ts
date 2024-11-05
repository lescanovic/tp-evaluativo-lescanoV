import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-polvos',
  templateUrl: './polvos.component.html',
  styleUrls: ['./polvos.component.css']
})
export class PolvosComponent {
  public info : Producto [];
  constructor(public crudService: CrudService){
    this.info = [
   
      {
        uid:"",
        nombre:"Polvo suelto y compacto de Sheglam",
        tono:"",
        imagen:"./assets/imagenes/polvo2.webp",
        alt:"2 polvos, uno suelto y otro compacto con acabado luminoso",
        precio:24245
      },

 {
        uid:"",
        nombre:"Polvo suelto y compacto de Sheglam",
        tono:"",
        imagen:"./assets/imagenes/polvo3.jpeg",
        alt:"2 polvos traslucidos, uno suelto y otro compacto con acabado luminoso",
        precio:30500
      },
      
      {
        uid:"",
        nombre:"Polvo suelto de RubyRose",
        tono:"",
        imagen:"./assets/imagenes/polvo4.jpeg",
        alt:"polvos sueltos traslucidos con acabado mate",
        precio:6500
      },
       
      {
        uid:"",
        nombre:"Polvo suelto de RubyRose",
        tono:"",
        imagen:"./assets/imagenes/polvo5.jpg",
        alt:"polvos sultos en tono banana con acabado mate",
        precio:6500
      },
      {
        uid:"",
        nombre:"Polvo suelto de Melu",
        tono:"",
        imagen:"./assets/imagenes/polvo6.jpg",
        alt:"polvos sueltos en tono banana con acabado mate",
        precio:4500
      },
      {
        uid:"",
        nombre:"Polvo suelto de Pink21",
        tono:"",
        imagen:"./assets/imagenes/polvo7.jpg",
        alt:"polvos sueltos traslucidos con acabado mate",
        precio:3600
      },
      {
        uid:"",
        nombre:"Polvo compacto de RubyRose",
        tono:"",
        imagen:"./assets/imagenes/polvo8.jpeg",
        alt:"polvo compacto con acabado luminoso",
        precio:5000
      },
      {
        uid:"",
        nombre:"Polvo compacto de Pink21",
        tono:"",
        imagen:"./assets/imagenes/polvo9.png",
        alt:"polvo compacto con acabado luminoso",
        precio:2500
      },
    ]

  }
}
