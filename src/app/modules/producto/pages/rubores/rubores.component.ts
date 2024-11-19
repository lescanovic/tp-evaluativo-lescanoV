import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-rubores',
  templateUrl: './rubores.component.html',
  styleUrls: ['./rubores.component.css']
})
export class RuboresComponent {
public info : Producto [];
constructor(public crudService: CrudService){
  this.info = [
    {
      uid:"",
      nombre:"Rubor Rare Beauty",
      tono:"Grateful",
      imagen:"./assets/imagenes/rubor.jpg",
      alt:"Rubor en crema ",
      precio: 15000,
      stock: 0
    
    
    },
    {
      uid:"",
      nombre:"Patrick Ta Rubor",
      tono:"Peach",
      imagen:"./assets/imagenes/rubor2.jpg",
      alt:"Rubor en crema, con luminosidad ",
      precio: 17000,
      stock: 0
    
    
    },
    {
      uid:"",
      nombre:"Rubor de Milk ",
      tono:"Poppy pink",
      imagen:"./assets/imagenes/rubor3.jpg",
      alt:"Rubor en crema y tinte de labios: Lip + Cheek",
      precio: 12000,
      stock: 0
    
    
    },
    {
      uid:"",
      nombre:"Paletas de rubores de DAPOP ",
      tono:"Wine, Sweet Pink, Peach, Pink",
      imagen:"./assets/imagenes/rubor4.jpg",
      alt:"Cuatro Tonos de rubores en polvo",
      precio: 7000,
      stock: 0
    
    
    }, 
    {
      uid:"",
      nombre:" Rubor Regina",
      tono:"Rose",
      imagen:"./assets/imagenes/rubor5.jpg",
      alt:"Rubor en polvo tonalizador",
      precio: 4500,
      stock: 0
    
    
    },    {
      uid:"",
      nombre:"Rubor Pink 21",
      tono:"Nude",
      imagen:"./assets/imagenes/rubor6.jpg",
      alt:"Rubor en polvo",
      precio: 6000,
      stock: 0
    
    
    },    {
      uid:"",
      nombre:"Rubor Avon" ,
      tono:"Sweet Peach",
      imagen:"./assets/imagenes/rubor7.jpg",
      alt:"Rubor en polvo con ilumacion",
      precio: 5000,
      stock: 0
    
    
    }, 
    
  
  ]
}
}
