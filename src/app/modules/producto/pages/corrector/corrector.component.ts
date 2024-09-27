import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-corrector',
  templateUrl: './corrector.component.html',
  styleUrls: ['./corrector.component.css']
})
export class CorrectorComponent {
  public info : Producto [];
  constructor(){
    this.info = [
      {
        uid:"",
        nombre:"Corrector NARS",
        tono:"07",
        imagen:"./assets/imagenes/corrector1.jpg",
        alt:"Corrector Liquido ",
        precio: 12000
      
      },
    
    ]
  }
}
'¿'