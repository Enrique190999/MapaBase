import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapasService {

  private capas:Capa[] = [
    {
      idcontainer: "Mapa2",
      idstyle: "mapbox://styles/edmundoblasco/ck2gjqybi0k7l1ds00sz93gwl",
      idcapa: "seccionado-2019-4zs11r",
      idsource:"seccionado-2019-4zs11r",
      nombrecapa: "Capa de pruebas para secciones",
      descripcioncapa: "Descripción de la capa de pruebas para secciones"
    },
    {
      idcontainer: "Mapa2",
      idstyle: "mapbox://styles/edmundoblasco/ck2gjqybi0k7l1ds00sz93gwl",
      idcapa: "espana-municipios-2kvr4j",
      idsource:"espana-municipios-2kvr4j",
      nombrecapa: "Capa de pruebas para municipios",
      descripcioncapa: "Descripción de la capa de pruebas para municipios"
    },
    {
      idcontainer: "Mapa2",
      idstyle: "mapbox://styles/edmundoblasco/ck2gjqybi0k7l1ds00sz93gwl",
      idcapa: "provincias-espaa",
      idsource:"provincias-espaa",
      nombrecapa: "Capa de pruebas para provincias de España",
      descripcioncapa: "Descripción de la capa de pruebas para provincias"
    },
    {
      idcontainer: "Mapa2",
      idstyle: "mapbox://styles/edmundoblasco/ck2gjqybi0k7l1ds00sz93gwl",
      idcapa: "comunidades-autnomas-espaa",
      idsource:"comunidades-autnomas-espaa",
      nombrecapa: "Capa de pruebas para comunidades autónomas de España",
      descripcioncapa: "Descripción de la capa de pruebas para comunidades autónomas de España"
    }
  ];


  constructor(  ) { }


  buscarCapas ( termino:string ) {

    let capasArr:Capa[] = [];
    termino = termino.toLowerCase();

    for (let capa of this.capas) {

      let nombre = capa.idcontainer.toLowerCase();
      if( nombre.indexOf(termino) >=0) {
        capasArr.push(capa)
      }
    }
    return capasArr;
  }

}




export interface Capa{
  idcontainer:string;
  idstyle:string;
  idcapa: string;
  idsource:string;
  nombrecapa:string;
  descripcioncapa: string;
}


