import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-contorno',
  templateUrl: './contorno.component.html',
  styleUrls: ['./contorno.component.css']
})
export class ContornoComponent {
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
