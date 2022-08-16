import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import comunidadautonomas from './../places/comunidadautonoma.json';
import provincias from './../places/provincia.json';
import jezs from './../places/jez.json';
import municipios from './../places/municipio.json';
import munidistritos from './../places/municdistrito.json';
import secciones from './../places/seccion.json';



@Component({
  selector: 'app-componenteprueba',
  templateUrl: './componenteprueba.component.html',
  styleUrls: ['./componenteprueba.component.css']
})
export class ComponentepruebaComponent implements OnInit {

  constructor() { }
  com = comunidadautonomas;
  @Output() idProvinciaOutput = new EventEmitter<{}>()
  comSeleccionada = this.com[0]

  prov = provincias;
  provinciaSeleccionada = this.prov[0].IdProv

  muni = municipios;
  muniSeleccionada = this.muni[0]
  seleccAmbito = 0
  seleccIdLugar = ""
  seleccDetalle = 0

  enviarSelecc() {
    if (this.seleccAmbito != 0 && this.seleccIdLugar != "" && this.seleccDetalle != 0) {
      let enviarSeleccion = {
        ambito: this.seleccAmbito,
        lugar: this.seleccIdLugar,
        detalle: this.seleccDetalle
      }
      this.idProvinciaOutput.emit(enviarSeleccion)
    }
  }
  //Recoge el nombre del municipio, hace un filtro en el json de municipio (muni) y devuelve el valor en el que coincide el nombre del municipio
  datalistMunicipios(municipioValue: any) {
    console.log('Estamos dentro', municipioValue)
    this.seleccIdLugar = this.muni.filter((municipio) => {
      return municipio.Municipio == municipioValue
    })[0].IdMuncicipio
  }

  jez = jezs;
  jezSeleccionada = this.jez[0]

  dis = munidistritos;
  disSeleccionada = this.dis[0]

  secc = secciones;
  seccSeleccionada = this.secc[0]



  ngOnInit() {

  }
  cambioCom() {
    console.log(this.comSeleccionada);
  }
  cambioProvincia() {
    console.log(this.provinciaSeleccionada);
    this.idProvinciaOutput.emit(this.provinciaSeleccionada)
  }
  cambioJez() {
    console.log(this.jezSeleccionada);
  }
  cambioMuni() {
    console.log(this.muniSeleccionada);
  }
  cambioDis() {
    console.log(this.disSeleccionada);
  }
  cambioSecc() {
    console.log(this.seccSeleccionada)

  }



}
