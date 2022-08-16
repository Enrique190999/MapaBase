import { Injectable } from '@angular/core';

@Injectable()
export class MapasService {

        private mapas:Mapa[] = [
            {
              idmapa: "0",
              nombre: "Mapa1",
              descripcion: "Descripción mapa1",
              img: "assets/img/mapa1.png",
              complejidad: 19411101,
              tipo:"DC"
            },
            {
              idmapa: "1",
              nombre: "Mapa2",
              descripcion: "Descripción LARGA del mapa2.",
              img: "assets/img/mapa2.gif",
              complejidad: 19390501,
              tipo:"DC"
            },
            {
              idmapa: "2",
              nombre: "Mapa3",
              descripcion: "Descripción LARGA del mapa3.",
              img: "assets/img/mapa3.png",
              complejidad: 19640101,
              tipo: "Marvel"
            },
            {
              idmapa: "3",
              nombre: "Mapa4",
              descripcion: "Descripción LARGA del mapa4.",
              img: "assets/img/mapa4.gif",
              complejidad: 19620501,
              tipo:"Marvel"
            },
            {
              idmapa: "4",
              nombre: "Mapa5",
              descripcion: "Descripción LARGA del mapa5.)",
              img: "assets/img/mapa5.jpg",
              complejidad: 19400601,
              tipo: "DC"
            },
            {
              idmapa: "5",
              nombre: "Mapa6",
              descripcion: "Descripción LARGA del mapa6.",
              img: "assets/img/mapa6.png",
              complejidad: 19620801,
              tipo: "Marvel"
            },
            {
              idmapa: "6",
              nombre: "Mapa7",
              descripcion: "Descripción LARGA del mapa7.",
              img: "assets/img/mapa7.png",
              complejidad: 19741101,
              tipo: "Marvel"
            }
          ];


    constructor() {

        console.log("Servicio listo para usarse");
    }

    getMapas():Mapa[] {
        return this.mapas;
    }

    getMapa( idx: number ) {
      return this.mapas[idx];
    }

    buscarMapas ( termino:string ) {

      let mapasArr:Mapa[] = [];
      termino = termino.toLowerCase();

      for (let mapa of this.mapas) {

        let nombre = mapa.nombre.toLowerCase();
        if( nombre.indexOf(termino) >=0) {
          mapasArr.push(mapa)
        }
      }
      return mapasArr;
    }
}

export interface Mapa{
    idmapa:string;
    nombre: string;
    descripcion: string;
    img: string;
    complejidad: number;
    tipo: string;
}