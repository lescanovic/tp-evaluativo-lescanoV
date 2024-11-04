import { Component } from '@angular/core';

import Swal from 'sweetalert2';
import { CrudService } from '../../admin/services/crud.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  dataSource = this.crudService.coleccionCarrito; 
constructor(public crudService : CrudService){}



displayedColumns :string [] = ['nombre','cantidad', 'preciounidad','eliminar']
actSubtotal(item:any){
this.crudService.AgregarAlCarrito(item)
}
eliminarItem(item:any){
  this.crudService.eliminarItem(item)
  this.crudService.coleccionCarrito =[...this.crudService.coleccionCarrito]
}

realizarCompra(){
  Swal.fire({
    title:"¡Que bien!",
    text: "¡Se pudo realizar la compra con éxito!",
    icon: "success"
  });
}

}
