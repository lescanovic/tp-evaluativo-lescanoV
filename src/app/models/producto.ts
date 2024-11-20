export interface Producto {
    uid: string | any ;
    tono: string ;
    imagen: string;
    alt: string;
    precio:number;
    nombre:string;
    stock: number //manejamos el stock de productos
    categoria: string
    descripcion: string
}
