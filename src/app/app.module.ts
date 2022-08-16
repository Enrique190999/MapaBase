//import { MapasService } from './components/servicios/mapas.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MapasComponent } from './components/mapas/mapas.component';

//Servicios
import {MapasService} from './services/mapas.service';
import { MapaComponent } from './components/mapa/mapa.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { Mapa1Component } from './components/shared/mapa1/mapa1.component';
import { Mapa2Component } from './components/shared/mapa2/mapa2.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ComponentepruebaComponent } from './componenteprueba/componenteprueba.component';
import { FormsModule } from '@angular/forms';
import { Infmapa1Component } from './infmapa1/infmapa1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MapasComponent,
    MapaComponent,
    BuscadorComponent,
    Mapa1Component,
    Mapa2Component,
    PruebasComponent,
    ComponentepruebaComponent,
    Infmapa1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    MapasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
