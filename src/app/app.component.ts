import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
//import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maps';

  constructor(private auth: AuthService /*, private primengConfig: PrimeNGConfig */) { }

  ngOnInit() {
 /*    this.primengConfig.ripple = true; */
  }

}
