import { Component, OnInit } from '@angular/core';
import { PropiedadService } from '../services/propiedad.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css'],
})
export class PropiedadesComponent implements OnInit{

  loggedUser: any;
  propiedadList: any[] = [];
  propiedadArrendador: any = {
    "idArrendador": 1,
    "nombres": "Juliana",
    "apellidos": "Gonzalez",
    "correoElectronico": "juligonzo@example.com",
    "telefono": "4517842",
    "password": "password123"
  }
  propiedadFotos: any = {
    "idFoto": 0,
    "nombreArchivo": ""
  }
  propiedadObj: any = {
      "idPropiedad": 0,
      "nombre": "",
      "departamento": "",
      "municipio": "",
      "tipoIngreso": "",
      "descripcion": "",
      "cantidadHabitaciones": 0,
      "cantidadBanios": 0,
      "permiteMascotas": false,
      "tienePiscina": false,
      "tieneAsador": false,
      "valorNoche": 0,
      "arrendador": {
      },
      "fotos": [
          
      ]
  
  }
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

  open() {
    const model = document.getElementById('newpropertyModal'); 
    if(model != null) {
        model.style.display = 'block';
    }
}
close() {
  const model = document.getElementById('newpropertyModal'); 
  if(model != null) {
    model.style.display = 'none';
  }
}
}
