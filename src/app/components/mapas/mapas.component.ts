import { MapasService, Mapa } from '../../services/mapas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  mapas: Mapa[] = [];
  constructor(private _mapasService: MapasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.mapas = this._mapasService.getMapas();
    // console.log (this.mapas);
  }

  verMapa(idx: string) {
    // console.log(idx);
    this.router.navigate(['/mapa', parseInt(idx)]);
  }
}
