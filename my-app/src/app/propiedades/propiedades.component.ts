import { Component, OnInit } from '@angular/core';
import { PropiedadService } from '../services/propiedad.service';
import { Router } from '@angular/router';

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
      "arrendador": [],
      "fotos": [
          
      ]
  }


  constructor(private prpSrv: PropiedadService, private router: Router) { 
    const local = localStorage.getItem('UsuarioArriendaTuFinca');
    if (local != null) {
      this.loggedUser = JSON.parse(local);
      this.propiedadObj.idArrendatario = this.loggedUser.idArrendador;
    }

  }
  makeBooking(idPropiedad: number){
    this.router.navigate(['/booking', idPropiedad]);
  }
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
savePropiedad() {
  // Create a new object with only the specified attributes
  const requestBody = {
    nombre: this.propiedadObj.nombre,
    departamento: this.propiedadObj.departamento,
    municipio: this.propiedadObj.municipio,
    tipoIngreso: this.propiedadObj.tipoIngreso,
    descripcion: this.propiedadObj.descripcion,
    cantidadHabitaciones: this.propiedadObj.cantidadHabitaciones,
    cantidadBanios: this.propiedadObj.cantidadBanios,
    permiteMascotas: this.propiedadObj.permiteMascotas,
    tienePiscina: this.propiedadObj.tienePiscina,
    tieneAsador: this.propiedadObj.tieneAsador,
    valorNoche: this.propiedadObj.valorNoche,
    fotos: []
  };

  // Make the HTTP request
  this.prpSrv.registerproperty(requestBody, this.loggedUser.idArrendador).subscribe((res: any) => {
    if (res.result =! null) {
      alert('Propiedad guardada');
      console.log(res);
      this.close();

      // Reset the propiedadObj to empty values
      this.propiedadObj = {
        nombre: "",
        departamento: "",
        municipio: "",
        tipoIngreso: "",
        descripcion: "",
        cantidadHabitaciones: 0,
        cantidadBanios: 0,
        permiteMascotas: false,
        tienePiscina: false,
        tieneAsador: false,
        valorNoche: 0,
        fotos: []
      };
    } else {
      alert('Error: ' + res.statusText);
    }
  });
}}
