import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public info: Usuario [] ;
constructor(){
this.info = [
  {
    id:"",
    nombre:"Victoria",
    edad:20,
    imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUCIDwmmKo_iyHPRGR3guUfuEYaF13oXwiAQ&s",
    alt:"Estudiante del colegio secundario cet 30",
    email:"victorialescanoarco@gmail.com",
    password:"2987423"
  },
  
]



}
}
