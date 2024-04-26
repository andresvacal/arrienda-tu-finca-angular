import { Component, OnInit } from '@angular/core';
import { PropiedadService } from '../services/propiedad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
  
})

export class HomeComponent implements OnInit {

  propiedadList: any[] = [];

  constructor(private propsSerc: PropiedadService, private router: Router) { }

  ngOnInit(): void {
    this.getPropiedades();
  }

  getPropiedades() {
    this.propsSerc.ObtenerPropiedades().subscribe((res: any) => {
      this.propiedadList = res;
      console.log(res);
    });
  }
  makeBooking(idPropiedad: number){
    this.router.navigate(['/booking', idPropiedad]);
  }
}
