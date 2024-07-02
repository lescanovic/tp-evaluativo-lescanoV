import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true ;

  async registrar(){
    const credenciales = {
        email: this.usuarios.email,
        password : this.usuarios.password
    }
    const res = await  
  }
 
}
