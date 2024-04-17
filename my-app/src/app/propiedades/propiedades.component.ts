import { Component, OnInit } from '@angular/core';
import { PropiedadService } from '../services/propiedad.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css'],
})
export class PropiedadesComponent implements OnInit{

  propiedadList: any[] = [];
  constructor(private prpSrv: PropiedadService) { }

  ngOnInit(): void {
      this.getPropiedades();
  }

  getPropiedades() {
    this.prpSrv.ObtenerPropiedades().subscribe((res: any) => {
      this.propiedadList = res;
      console.log(res);
    });
  }
}
