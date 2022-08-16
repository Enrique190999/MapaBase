
import {CapasService} from '../../../services/capas.service'
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-mapa2',
  templateUrl: './mapa2.component.html',
  styleUrls: ['./mapa2.component.css']
})
export class Mapa2Component implements OnInit {
  mapa2?: Mapboxgl.Map;
  nombrecapa: string = "";
  public clickedI?: number;
  public stateFlag?: boolean;
  capas: any[] = [];
  
  constructor(  private _capasService: CapasService ) { }

  ngOnInit() {
    this.capas = this._capasService.buscarCapas("Mapa2");
    console.log(this.capas);
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    this.mapa2 = new Mapboxgl.Map({
       container: 'mapa2', // container id
      // container: this.capas.idcontainer,
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: 'mapbox://styles/edmundoblasco/ck2gjqybi0k7l1ds00sz93gwl',

      center: [-0.4077825, 39.455168], // starting position
      zoom: 13 // starting zoom
    });
    // this.mapa2.addControl(new Mapboxgl.NavigationControl());
  }

  mostrarOcultarCapa(nombreCapa:any) {
    // this.stateFlag = !this.stateFlag
    this.nombrecapa = nombreCapa;  
    console.log(this.mapa2?.getStyle().layers);  
    console.log(this.nombrecapa = nombreCapa);

    if (this.mapa2?.getLayoutProperty(this.nombrecapa,"visibility") == 'visible') {
      this.mapa2?.setLayoutProperty(this.nombrecapa, "visibility", "none");
    }
    else {
      this.mapa2?.setLayoutProperty(this.nombrecapa, "visibility", "visible");
    };
  }

  calculateClasses(nombreCapa:any) {
    // this.nombrecapa = nombreCapa;  
    // return {
    //   btn: true,
    //   'btn-group-vertical': false,
    //   '': (this.mapa2.getLayoutProperty(this.nombrecapa,"visibility") == 'visible')
    // };
  }

}