import { Component, Input, OnInit } from '@angular/core';
import eventos from '../places/eventos.json'
import { PruebarespuestaService } from '../pruebarespuesta.service';

@Component({
  selector: 'app-infmapa1',
  templateUrl: './infmapa1.component.html',
  styleUrls: ['./infmapa1.component.css']
})
export class Infmapa1Component implements OnInit {

  constructor(private servicio: PruebarespuestaService) { }

  listaEventos = eventos;
  listaInformes:any[] = [];
  listaPartidos:any[] = [];
  mostrarSpinner:boolean = false;
  ccPartidos = "";
  resultadoMedias:number = 1;
  listadoMapa1:any[] = [];

  eventoSeleccionado = this.listaEventos[0].IdElec;
  @Input() idEntrada:any;

  ngOnInit() {
  }
  clickboton() {
    this.servicio.mapa1(this.idEntrada, this.eventoSeleccionado)
      .then((res) => res.json())
      .then((informe) => {
        this.listaInformes = informe;
        console.log(informe)
      })
  }

  eventoActual() {
    this.mostrarSpinner = true
    this.servicio.seleccPartido(this.idEntrada, this.eventoSeleccionado)
      .then((res) => res.json())
      .then((partido) => {
        this.listaPartidos = partido;
        console.log(partido)
        this.mostrarSpinner=false
      })
  
  }
mostrarMedias(){
  console.log(this.idEntrada, this.eventoSeleccionado,this.ccPartidos)
  this.servicio.medias(this.idEntrada, this.eventoSeleccionado,this.ccPartidos)
  .then((res) => res.json())
  .then((medias) => {
 /*    this.listaPartidos = medias; */
 console.log(medias)
   // QUITAR CUANDO ESTE OK EL NAN: this.resultadoMedias = parseInt(medias[0].PorcConst)
   // this.mostrarSpinner=false
  })
}

getmapa1_1(){
  this.servicio.getmapa1_1(this.idEntrada, this.eventoSeleccionado,this.ccPartidos, this.resultadoMedias)
  .then((res) => res.json())
  .then((rdomapa1) => {
     this.listadoMapa1 = rdomapa1; 
     console.log(this.listadoMapa1)
  })
}


}
