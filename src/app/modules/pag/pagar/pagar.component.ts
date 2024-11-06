import { Component } from '@angular/core';
import { CrudService } from '../../admin/services/crud.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent {

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
incrementar(item: any){
  item.cantidad++;
  this.actSubtotal(item)
}
decrementar(item:any){
  if (item.cantidad > 1) {
    item.cantidad--
    this.actSubtotal
  }
}

}
