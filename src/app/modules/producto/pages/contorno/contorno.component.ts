import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
@Component({
  selector: 'app-contorno',
  templateUrl: './contorno.component.html',
  styleUrls: ['./contorno.component.css']
})
export class ContornoComponent {
  public info : Producto [];
  constructor(){
    this.info = [
      {
        uid:"",
        nombre:"Contorno de Pink21",
        tono:"",
        imagen:"./assets/imagenes/contorno1.jpg",
        alt:"4 tonos de controno en crema con durabilidad de 12 horasa",
        precio: 7900
      
      },
      {
        uid:"",
        nombre:"Contorno de RubyRose",
        tono:"",
        imagen:"./assets/imagenes/contorno2.jpeg",
        alt:"Contorno en polvo marmolado luminoso",
        precio: 6500
      
      },
      {
        uid:"",
        nombre:"Contorno de Ushas",
        tono:"",
        imagen:"./assets/imagenes/contorno3.jpeg",
        alt:"6 tonos de contorno en polvo",
        precio: 12000
      
      },
      {
        uid:"",
        nombre:"Contorno de Ushas",
        tono:"",
        imagen:"./assets/imagenes/contorno4.jpeg",
        alt:"4 tonos de contorno en crema anti brillosidad",
        precio: 7550
      
      },
      {
        uid:"",
        nombre:"Contorno de Trendy",
        tono:"",
        imagen:"./assets/imagenes/contorno5.jpg",
        alt:"Contorno liquido",
        precio: 3500
      
      },
      {
        uid:"",
        nombre:"Contorno de TodoModa",
        tono:"",
        imagen:"./assets/imagenes/contorno6.webp",
        alt:"Contorno liquido luminoso",
        precio: 5000
      
      },
      {
        uid:"",
        nombre:"Contorno de Rimmel",
        tono:"",
        imagen:"./assets/imagenes/contorno7.webp",
        alt:"Contorno en polvo con acabado mate",
        precio: 8990
      
      },
      {
        uid:"",
        nombre:"Contorno de Sheglam",
        tono:"",
        imagen:"./assets/imagenes/contorno8.webp",
        alt:"Contorno liquido con aplicador",
        precio: 9950
      
      },
      {
        uid:"",
        nombre:"Contorno de Karite",
        tono:"",
        imagen:"./assets/imagenes/contorno9.webp",
        alt:"Contorno en barra",
        precio: 8650
      
      },
    
    
    ]
    
  }
}
