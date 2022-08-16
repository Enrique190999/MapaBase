import { AuthGuard } from './services/auth.guard';
import { Mapa1Component } from './components/shared/mapa1/mapa1.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapasComponent } from './components/mapas/mapas.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mapas', component: MapasComponent },
  // { path: 'mapa1', component: Mapa1Component },
  { path: 'buscar/:termino', component: BuscadorComponent },
  
  { path: 'mapa/:id',
   component: MapaComponent,
  canActivate: [ AuthGuard ]},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
