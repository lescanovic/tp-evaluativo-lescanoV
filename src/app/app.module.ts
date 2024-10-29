import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'; //importacion de las cards de Ofertas
import { environment } from 'src/environments/environments'; //Vinculacion a la Base de datos
import { AngularFireModule  } from '@angular/fire/compat'; // Trabaja con las colecciones de informacion 
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //Trabaja con la autentificacion 
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { SharedModule } from './modules/shared/components/shared/shared.module';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { SobrenosotrosComponent } from './modules/sobrenosotros/sobrenosotros.component';
import { OfertasComponent } from './modules/ofertas/ofertas.component';

import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    SobrenosotrosComponent,
    OfertasComponent,
 

   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatCardModule,
    FormsModule,
  
    





 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
