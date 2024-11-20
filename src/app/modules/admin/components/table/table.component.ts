import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // Creamos coleccion local de productos -> la definimos como array
  coleccionProductos: Producto[] = [];
  //Definimos formulario para los productos 


  productosSeleccionado!: Producto; //! para que tome valores vacios
  modalVisibleProducto: boolean = false
  nombreImagen!: string //Obtiene el nombre de la imagen
  imagen!: string //Obtiene la ruta de la imagen


  //Atributos alfanumeros sin string se inicializan con comillas simples 
  //Atributos numericos se inicializan con 0
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, Validators.required),
    tono: new FormControl('', Validators.required),
    // imagen: new FormControl('',Validators.required), //Lo comento porque ya no sera requerido, la imagen no se subira con la direccion, sino que se subira una imagen descargada
    alt: new FormControl('', Validators.required),
    stock: new FormControl(0, Validators.required),
    descripcion: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required)

  })

  constructor(public servicioCrud: CrudService) { }
  ngOnInit(): void {
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto
    })
  }
  async agregarProducto() {
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        //no toma al id al principio porque la bd lo agrega solo
        uid: '',
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        tono: this.producto.value.tono!,
        imagen: '', //La imagen generara su contenido desde la base de datos
        alt: this.producto.value.alt!,
        stock: this.producto.value.stock!,
        categoria: this.producto.value.categoria!,
        descripcion: this.producto.value.descripcion!


      }
      // Enviamos nombre y url de la imagen; definimos carpeta de imágenes como "productos"
      await this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "productos")
        .then(res => {
          this.servicioCrud.obtenerUrlImagen(res)
            .then(url => {

              //Ahora metodo crearProducto recibe datos del formnulario y URL creada
              this.servicioCrud.crearProducto(nuevoProducto, url)
                .then(producto => {

                  Swal.fire({
                    title: "¡Bien Hecho!",
                    text: "¡Ha ingresado un nuevo producto con exito!",
                    icon: "success"
                  })
                  //resetea el formulario y las casillas quedan vacias
                  this.producto.reset()
                })
                .catch(error => {

                  Swal.fire({
                    title: "Oh no",
                    text: "Ha ocurrido un error al agregar un nuevo producto:\n" + error,
                    icon: "error"
                  })
                  this.producto.reset()
                })
            })
        })

    };
  }

  cargarImagen(event: any) {
    // Variable para obtener el archivo subido desde el input del HTML
    let archivo = event.target.files[0];
    // Variable para crear un nuevo objeto de tipo "archivo" o "file" y leerlo
    let reader = new FileReader()

    if (archivo != undefined) {

      /*Llamamos a metodo readAsDataURL para leer toda la informacion recibida
        enviamos como parametro al archivo porque sera el cargador de tener la info ingresada por el usuario
  
      */
      reader.readAsDataURL(archivo)

      reader.onloadend = () => {
        let url = reader.result
        if (url != null) {
          this.nombreImagen = archivo.name
          this.imagen = url.toString()
        }
      }
    }

  }


  /*Eliminar*/
  mostrarBorrar(productoSeleccionado: Producto) {
    this.modalVisibleProducto = true;

    this.productosSeleccionado = productoSeleccionado
  }


  borrarProducto() {
    /*Ahora enviamos tanto el ID del producto (para identificarlo en firestore) y la URL de la imagen(para eliminarla
     desde el almacenamiento de storage).
    */
    this.servicioCrud.eliminarProducto(this.productosSeleccionado.uid, this.productosSeleccionado.imagen)
      .then(respuesta => {
        alert("Se ha podido eliminar con exito")
      })
      .catch(error => {
        alert("Ha ocurrido un error al eliminar el producto \n" + error)
      })
  }
  /* Editar producto*/
  mostrarEditar(productoSeleccionado: Producto) {
    this.productosSeleccionado = productoSeleccionado
    //Tomar los valores del producto seleccionado y los va a autocompletar en el formulario del modal (menos el ID)
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      tono: productoSeleccionado.tono,
      //imagen:productoSeleccionado.imagen,
      alt: productoSeleccionado.alt,
      stock: this.productosSeleccionado.stock,
      categoria: this.productosSeleccionado.categoria,
      descripcion: this.productosSeleccionado.descripcion
    })
  }

  //Se vincula al boton "editarProducto" del modal "editar" en el html
  editarProducto() {
    let datos: Producto = {
      uid: this.productosSeleccionado.uid,
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      tono: this.producto.value.tono!,
      imagen: this.productosSeleccionado.imagen, //Llamamos del producto seleccionado
      alt: this.producto.value.alt!,
      stock: this.producto.value.stock!,
      categoria: this.producto.value.categoria!,
      descripcion: this.producto.value.descripcion!
    }

    //Vamos a verificar si el usuario ingresa o no una nueva imagen
    if (this.imagen) {
      //Llamamos del servicio Crud al metodo Subir imagen
      this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "producto")
        .then(resp => {
          this.servicioCrud.obtenerUrlImagen(resp)
            .then(url => {
              datos.imagen = url; //Actualizamos URL de la imagen en los datos del formulario

              this.actualizarProducto(datos); //Esta funcion envia los datos con cambios realizados

              this.producto.reset(); //Reseteamos para que queden las casillas vacias

            })
            .catch(error => {
              alert("Hubo un error al subir la imagen \n" + error)
              this.producto.reset();
            })
        })
    }
    else {
      /*Actualizamos el formulario con los datos recibidos del usuario pero sin modificar la imagen ya existente
        en firestore y en storage */
      this.actualizarProducto(datos);
    }


  }

  actualizarProducto(datos: Producto) {
    //Enviamos el metodo del id del producto seleccionado y los datos actualizados
    this.servicioCrud.modificarProducto(this.productosSeleccionado.uid, datos)
      .then(producto => {

        Swal.fire({
          title: "¡Buen trabajo!",
          text: "¡El producto se a modificado con exito!",
          icon: "success"
        })


        this.producto.reset()
      })
      .catch(error => {



        Swal.fire({
          title: "¡Oh no!",
          text: "¡Hubo un error al modificar el producto:\n" + error,
          icon: "success"
        })


        this.producto.reset()
      })
  }

}
