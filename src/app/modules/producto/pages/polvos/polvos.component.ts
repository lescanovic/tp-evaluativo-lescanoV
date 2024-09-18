import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-polvos',
  templateUrl: './polvos.component.html',
  styleUrls: ['./polvos.component.css']
})
export class PolvosComponent {
  public info : Producto [];
  constructor(){
    this.info = [
      {
        uid:"",
        nombre:"Rubor Rare Beauty",
        tono:"Grateful",
        imagen:"./assets/imagenes/",
        alt:"Rubor en crema ",
        precio: 15000
      
      },
    
    ]
  }
}
