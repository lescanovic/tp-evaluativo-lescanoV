import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table'; // Para tablas
import { MatButtonModule } from '@angular/material/button'; // Para botones
import { environment } from 'src/environments/environments';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { SharedModule } from './modules/shared/components/shared/shared.module';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { SobrenosotrosComponent } from './modules/sobrenosotros/sobrenosotros.component';
import { OfertasComponent } from './modules/ofertas/ofertas.component';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './modules/carrito/carrito/carrito.component';
import { PagarComponent } from './modules/pag/pagar/pagar.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    SobrenosotrosComponent,
    OfertasComponent,
    CarritoComponent,
    PagarComponent
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
    MatTableModule,
    MatButtonModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
