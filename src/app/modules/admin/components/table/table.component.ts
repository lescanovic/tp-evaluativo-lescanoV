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
  // Colección local donde se almacenan los productos obtenidos desde Firebase.
  coleccionProductos: Producto[] = [];

  // Producto actualmente seleccionado (para editar o eliminar).
  productosSeleccionado!: Producto; // `!` asegura que puede estar vacío inicialmente.

  // Controla la visibilidad del modal para mostrar detalles del producto.
  modalVisibleProducto: boolean = false;

  // Almacenan el nombre y la ruta de la imagen que se subirá al servidor.
  nombreImagen!: string;
  imagen!: string;

  // Definición del formulario para los productos.
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required), // Campo obligatorio para el nombre.
    precio: new FormControl(0, Validators.required),  // Campo obligatorio para el precio.
    tono: new FormControl('', Validators.required),   // Campo obligatorio para el tono.
    alt: new FormControl('', Validators.required),    // Campo obligatorio para el texto alternativo de la imagen.
    stock: new FormControl(0, Validators.required),   // Campo obligatorio para el stock.
    descripcion: new FormControl('', Validators.required), // Campo obligatorio para la descripción.
    categoria: new FormControl('', Validators.required) // Campo obligatorio para la categoría.
  });

  constructor(public servicioCrud: CrudService) {}

  ngOnInit(): void {
    // Al inicializar el componente, obtenemos los productos desde el servicio.
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto; // Almacena los productos en la colección local.
    });
  }

  // Método para agregar un nuevo producto.
  async agregarProducto() {
    // Verificamos si el formulario es válido.
    if (this.producto.valid) {
      let nuevoProducto: Producto = {
        uid: '', // El ID se generará automáticamente en la base de datos.
        nombre: this.producto.value.nombre!,
        precio: this.producto.value.precio!,
        tono: this.producto.value.tono!,
        imagen: '', // La imagen será asignada después de subirla.
        alt: this.producto.value.alt!,
        stock: this.producto.value.stock!,
        categoria: this.producto.value.categoria!,
        descripcion: this.producto.value.descripcion!
      };

      // Subir la imagen al almacenamiento y obtener su URL. Le asigna el nombre "producto" a la carpeta donde se guardaran los productos
      await this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "producto")
        .then(res => {
          this.servicioCrud.obtenerUrlImagen(res).then(url => {
            // Crear el producto en la base de datos con la URL de la imagen.
            this.servicioCrud.crearProducto(nuevoProducto, url).then(() => {
              Swal.fire({
                title: "¡Bien Hecho!",
                text: "¡Producto agregado con éxito!",
                icon: "success"
              });
              this.producto.reset(); // Limpia el formulario.
            }).catch(error => {
              Swal.fire({
                title: "Error",
                text: "Ocurrió un error al agregar el producto:\n" + error,
                icon: "error"
              });
              this.producto.reset();
            });
          });
        });
    }
  }

  // Método para cargar la imagen desde un input del usuario.
  cargarImagen(event: any) {
    let archivo = event.target.files[0]; // Archivo seleccionado por el usuario.
    let reader = new FileReader(); // Objeto para leer el archivo.

    if (archivo) {
      reader.readAsDataURL(archivo); // Convierte el archivo a una URL base64.
      reader.onloadend = () => {
        let url = reader.result;
        if (url) {
          this.nombreImagen = archivo.name; // Guarda el nombre del archivo.
          this.imagen = url.toString();    // Guarda la ruta base64 de la imagen.
        }
      };
    }
  }

  // Muestra el modal para confirmar la eliminación de un producto.
  mostrarBorrar(productoSeleccionado: Producto) {
    this.modalVisibleProducto = true; // Activa el modal.
    this.productosSeleccionado = productoSeleccionado; // Establece el producto a eliminar.
  }

  // Método para eliminar un producto.
  borrarProducto() {
    this.servicioCrud.eliminarProducto(this.productosSeleccionado.uid, this.productosSeleccionado.imagen)
      .then(() => {
        alert("Producto eliminado con éxito");
      })
      .catch(error => {
        alert("Error al eliminar el producto:\n" + error);
      });
  }

  // Muestra el modal para editar un producto y rellena el formulario con los datos existentes.
  mostrarEditar(productoSeleccionado: Producto) {
    this.productosSeleccionado = productoSeleccionado; // Establece el producto seleccionado.
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      tono: productoSeleccionado.tono,
      alt: productoSeleccionado.alt,
      stock: productoSeleccionado.stock,
      categoria: productoSeleccionado.categoria,
      descripcion: productoSeleccionado.descripcion
    });
  }

  // Método para guardar los cambios al editar un producto.
  editarProducto() {
    let datos: Producto = {
      uid: this.productosSeleccionado.uid,
      nombre: this.producto.value.nombre!,
      precio: this.producto.value.precio!,
      tono: this.producto.value.tono!,
      imagen: this.productosSeleccionado.imagen, // Mantiene la imagen actual si no se cambia.
      alt: this.producto.value.alt!,
      stock: this.producto.value.stock!,
      categoria: this.producto.value.categoria!,
      descripcion: this.producto.value.descripcion!
    };

    // Verifica si se cargó una nueva imagen.
    if (this.imagen) {
      this.servicioCrud.subirImagen(this.nombreImagen, this.imagen, "producto")
        .then(resp => {
          this.servicioCrud.obtenerUrlImagen(resp).then(url => {
            datos.imagen = url; // Actualiza la imagen en los datos del producto.
            this.actualizarProducto(datos); // Actualiza el producto con la nueva imagen.
            this.producto.reset();
          }).catch(error => {
            alert("Error al subir la imagen:\n" + error);
            this.producto.reset();
          });
        });
    } else {
      this.actualizarProducto(datos); // Actualiza el producto sin cambiar la imagen.
    }
  }








/*El método actualizarProducto es una función de apoyo diseñada 
para modificar la información de un producto que ya existe en la
 base de datos. Este proceso se realiza a través del servicio CrudService,
  que se encarga de llevar a cabo la actualización mediante su función modificarProducto.
   Además, el método incluye mensajes de notificación para informar al usuario si la
    actualización se completó correctamente o si surgió algún problema durante la operación.
  */
  // Método auxiliar para actualizar un producto.
  actualizarProducto(datos: Producto) {
    this.servicioCrud.modificarProducto(this.productosSeleccionado.uid, datos)
      .then(() => {
        Swal.fire({
          title: "¡Éxito!",
          text: "Producto modificado correctamente.",
          icon: "success"
        });
        this.producto.reset();
      })
      .catch(error => {
        Swal.fire({
          title: "Error",
          text: "Ocurrió un error al modificar el producto:\n" + error,
          icon: "error"
        });
        this.producto.reset();
      });
  }
}
