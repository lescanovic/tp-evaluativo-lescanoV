import { Component } from '@angular/core';
import { Oferta } from 'src/app/models/oferta';
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










  public info: Oferta[] ;
  constructor(
    public servicioCrud: CrudService,
    public servicioCarrito: CarritoService
  ){
  this.info = [
    
    {
      uid:"",
      nombre:"Polvo Fenty Beauty",
      imagen:"./assets/imagenes/polvo1.jpg",
      tono:"",
      alt:"Polvo en tono Banana iluminador",
      precio:8900,
      precio2:7500,
      stock: 0
    },
    {
      uid:"",
      nombre:"Base de Maybelline",
      imagen:"./assets/imagenes/base.jpg",
      tono:"",
      alt:"Alta cobertura",
      precio:9800,
      precio2:8000,
      stock:0
    },
    {
      uid:"",
      nombre:"Labial Avon",
      imagen:"./assets/imagenes/labial.jpg",
      tono:"Tono: Nude",
      alt:"Labial cremoso hidratante con acido hialurónico en el centro",
      precio:1400,
      precio2:10000,
      stock:0
    },
    {
      uid:"",
      nombre:"Manteca de cacao Nivea",
      imagen:"./assets/imagenes/oferta1.jpg",
      tono:"Tono: Rose pink",
      alt:"Balsamo labial evita la resequedad y cura heridas",
      precio:6500,
      precio2:4500,
      stock:0
    },
    {
      uid:"",
      nombre:"Manteca de cacao Nivea",
      imagen:"./assets/imagenes/oferta2.jpg",
      tono:"Tono: Cherry",
      alt:"Balsamo labial evita la resequedad y cura heridas",
      precio:6500,
      precio2:4500,
      stock:0
    },
    {
      uid:"",
      nombre:"Manteca de cacao Nivea",
      imagen:"./assets/imagenes/oferta3.jpg",
      tono:"Tono: Red",
      alt:"Balsamo labial evita la resequedad y cura heridas",
      precio:6500,
      precio2:4500,
      stock:0
    },
    {
      uid:"",
      nombre:"Perfume de Violetta, fragancia a jazmin",
      imagen:"./assets/imagenes/oferta4.jpg",
      tono:"",
      alt:"",
      precio:15400,
      precio2:10000,
      stock:0
    },
    {
      uid:"",
      nombre:"Lapiz de ceja Avon, linea Power Stay",
      imagen:"./assets/imagenes/oferta5.jpg",
      tono:"Negro",
      alt:"",
      precio:5000,
      precio2:3000,
      stock:0
    },
    {
      uid:"",
      nombre:"Paleta de sombras de Ruby Rose",
      imagen:"./assets/imagenes/oferta6.png",
      tono:"",
      alt:"10 tonos de sombras, tornasoladas y matte",
      precio:7850,
      precio2:6350,
      stock:0
    },
   
  ]
  
  }
  

}
