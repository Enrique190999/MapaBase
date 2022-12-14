import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router, public auth: AuthService ) { }

  ngOnInit() {
  }

  buscarMapa( termino:string ) {
    // console.log(termino)
    this.router.navigate(['/buscar',termino]);
  }

}
