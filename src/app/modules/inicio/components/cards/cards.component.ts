import { Component } from '@angular/core';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
import { Producto } from 'src/app/models/producto';
import { CarritoService } from 'src/app/modules/carrito/services/carrito.service';
import Swal from 'sweetalert2';
import {Input, Output, EventEmitter} from '@angular/core'; 
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {  

  constructor(
    public servicioCrud: CrudService,
    public servicioCarrito:CarritoService
  ) {}

  // Definimos colección de productos locales
  coleccionProductos: Producto[] = [];

  // Variable local para seleccionar un producto específico
  productoSeleccionado!: Producto;

  // Variable local para manejar estado de un modal
  modalVisible: boolean = false;

  //Booleano para manejar visibilidad de "ultima compra"
  compraVisible: boolean = false;

  //Directivas para comunicarse con el componente padre
  @Input() productoReciente: string = '';

  @Output() productoAgregado = new EventEmitter<Producto>(); //@Output sera definido como un nuevo evento

  stock:number = 0;


  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })

    this.servicioCarrito.iniciarCarrito();
  }

  // Función para mostrar más información de los productos
  mostrarVer(info: Producto){
    // Cambio estado del modal a true (ahora es visible)
    this.modalVisible = true;

    // Guardo en variable seleccionado la información de producto elegido
    this.productoSeleccionado = info;
  }

  agregarProducto(info : Producto){
    this.productoAgregado.emit(info);

    this.compraVisible = true;

    const stockDeseado = Math.trunc(this.stock);

    if (stockDeseado<=0 || stockDeseado>info.stock){
      Swal.fire({
        title:'Error al agregar el producto',
        text:'El stock ingresado no es valido, por favor ingresar un valor valido',
        icon:'error'
      })
    } else {
      this.servicioCarrito.crearPedido(info,stockDeseado);
    }
  }

}
