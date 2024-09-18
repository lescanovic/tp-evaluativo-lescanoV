import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-rubores',
  templateUrl: './rubores.component.html',
  styleUrls: ['./rubores.component.css']
})
export class RuboresComponent {
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
