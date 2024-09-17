import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from 'src/environments/environments'; //Vinculacion a la Base de datos
import { AngularFireModule  } from '@angular/fire/compat'; // Trabaja con las colecciones de informacion 
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //Trabaja con la autentificacion 
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { SharedModule } from './modules/shared/components/shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule




 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
