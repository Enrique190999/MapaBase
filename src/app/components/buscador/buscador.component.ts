import { MapasService } from '../../services/mapas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

    mapas:any[] = [];
    termino?:string;
    

  constructor( private activatedRoute: ActivatedRoute,
                private _mapasService: MapasService,
                private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.mapas = this._mapasService.buscarMapas( params['termino']);
      console.log(this.mapas);
    })
  }
  verMapa( idx:number ) {
     console.log(this.mapas);
    this.router.navigate( ['/mapa',idx]);
  }

}
