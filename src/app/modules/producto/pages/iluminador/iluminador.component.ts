import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-iluminador',
  templateUrl: './iluminador.component.html',
  styleUrls: ['./iluminador.component.css']
})
export class IluminadorComponent {
  public info : Producto [];
  constructor(){
    this.info = [
     
    
    ]
  }
}
