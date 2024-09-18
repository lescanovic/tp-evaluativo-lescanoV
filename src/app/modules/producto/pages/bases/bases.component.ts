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
        nombre:"Rubor Rare Beauty",
        tono:"Grateful",
        imagen:"./assets/imagenes/rubor.jpg",
        alt:"Rubor en crema ",
        precio: 15000
      
      },
    
    ]
  }
}