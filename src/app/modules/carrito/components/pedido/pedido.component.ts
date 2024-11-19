import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { CarritoService } from '../../services/carrito.service';
import { Pedido } from 'src/app/models/pedido';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {

  coleccionPedidos:Pedido[] = [];

  constructor(
    public servicioCarrito:CarritoService,
    public servicioAuth: AuthService
  ){}

  ngOnInit(){
    this.servicioAuth.obtenerUid().then(uid => {
      if (uid) {
        this.servicioAuth.obtenerRol(uid).subscribe(rol => {
          if (rol === 'usuario') {
            //Inicializamos el carrito
            this.servicioCarrito.iniciarCarrito();

            this.servicioCarrito.obtenerCarrito().subscribe(producto =>
              this.coleccionPedidos = producto
            )
          }else{
            console.error('No se obtuvo el usuario de manera correcta');
          }
        })
      }
    })
  }

  quitarPedido(pedido:Pedido){
    this.servicioCarrito.borrarPedido(pedido);
  }
}
