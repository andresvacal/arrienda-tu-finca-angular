import { Component, OnInit } from '@angular/core';
import { PropiedadService } from '../services/propiedad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrl: './reservaciones.component.css'
})
export class ReservacionesComponent implements OnInit {
  loggedUser: any;
  reservationsList: any[] = [];


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
    "fotos": []
}
reservacionObj: any = {  
    "idSolicitud": 0,
    "fechaSolicitud": "2024-04-04T07:00:00.000+00:00",
    "fechaLlegada": "2024-04-10T09:00:00.000+00:00",
    "fechaSalida": "2024-04-17T05:00:00.000+00:00",
    "valor": 0.0,
    "estado": "Pendiente",
    "propiedad": [],
    "arrendador": [],
    "arrendatario": [],
}

  constructor(private prpSrv: PropiedadService, private router: Router) {
    const local = localStorage.getItem('UsuarioArriendaTuFinca');
    if (local != null) {
      this.loggedUser = JSON.parse(local);
    }
  }

  ngOnInit() {
    this.loadReservations();
  }

  loadReservations() {
    if (this.loggedUser && this.loggedUser.idArrendador) {
      this.prpSrv.loadReservationsByUserId(this.loggedUser.idArrendador).subscribe({
        next: (res: any) => {
          if (Array.isArray(res)) {
            this.reservationsList = res;  // Store the entire reservation array
          } else {
            this.reservationsList = [res];  // Make sure it's always an array
          }
          console.log(this.reservationsList); // Debugging line to check the output
        },
        error: (err: any) => {
          console.error('Error loading reservations:', err);
        }
      });
    }
  }
  
  

  viewReservationDetails(reservationId: number) {
  }

  addNewReservation() {
    // Logic to open a form or modal to create a new reservation
  }
}