import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebarespuestaService {

  constructor() { }

  provinciaPorId(id: String) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": id
    });

    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return fetch("http://localhost:5600/provinciaporid", requestOptions)

  }

  mapa1(idEntrada: any, idElec: string) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "ambito": parseInt(idEntrada.ambito),
      "lugar": idEntrada.lugar,
      "detalle": parseInt(idEntrada.detalle),
      "eventoSeleccionado": idElec
    });

    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return fetch("http://localhost:5600/mapa1", requestOptions)

  }
  seleccPartido(idEntrada: any, idElec: string) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "ambito": parseInt(idEntrada.ambito),
      "lugar": idEntrada.lugar,
      "detalle": parseInt(idEntrada.detalle),
      "eventoSeleccionado": idElec
    });

    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return fetch("http://localhost:5600/seleccpartido", requestOptions)

  }

  medias(idEntrada: any, idElec: string, CCPartidos: string) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "ambito": idEntrada.ambito,
      "lugar": idEntrada.lugar,
      "detalle": idEntrada.detalle,
      "eventoSeleccionado": idElec,
      "CCPartidos": CCPartidos
    });

    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

   return fetch("http://localhost:5600/seleccpartido", requestOptions)

  }
  
  getmapa1_1(idEntrada:any, idElec: string, CCPartidos:string, medias:number){

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "ambito": idEntrada.ambito,
  "lugar": idEntrada.lugar,
  "detalle": idEntrada.detalle,
  "eventoSeleccionado": idElec,
  "ccPartidos": CCPartidos,
  "medias": medias
});

var requestOptions: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

return fetch("http://localhost:5600/getmapa1bis", requestOptions)

  }

}
