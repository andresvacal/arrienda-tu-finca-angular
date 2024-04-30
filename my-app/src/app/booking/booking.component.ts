import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropiedadService } from '../services/propiedad.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  propiedadid: string = '';
  propiedadDetails: any;
  isDatePickerVisible: boolean = false; // Add this to control visibility
  startDate!: Date; // For start date
  endDate: Date | undefined; // For end date
  loggedUser: any;
  loggedUser2: any;
  prop: any;
  constructor(private activatedRoute: ActivatedRoute, private propSrv: PropiedadService) {
    const local = localStorage.getItem('UsuarioArriendaTuFinca');
    if (local != null) {
      this.loggedUser = JSON.parse(local);
      this.loggedUser2 = this.loggedUser.idArrendador;
      this.prop = this.getPropiedadDetails();
    }
  }
  ngOnInit(): void {
    this.propiedadid = this.activatedRoute.snapshot.params['propiedadid'];
    if (this.propiedadid) {
      this.getPropiedadDetails();
    } else {
      console.error('propiedadid is undefined');
    }
  }

  getPropiedadDetails() {
    this.propSrv.ObtenerPropiedad(this.propiedadid).subscribe(
      (res: any) => {
        this.propiedadDetails = res;
        console.log(res);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  makeReservation() {
    if (this.startDate && this.endDate) {
      const days = (this.endDate.getTime() - this.startDate.getTime()) / (1000 * 3600 * 24);
      const formattedStartDate = new Date(this.startDate).toISOString().substring(0, 11) + "12:00:00Z";
      const formattedEndDate = new Date(this.endDate).toISOString().substring(0, 11) + "12:00:00Z";
  
      // Updated request body to match the desired format
      const solicitud = {
        fechaLlegada: formattedStartDate,
        fechaSalida: formattedEndDate,
        fechaSolicitud: new Date().toISOString(),
        valor: this.propiedadDetails.valorNoche * days,
        estado: 'pendiente',
        propiedad:{
          idPropiedad: this.propiedadDetails.idPropiedad
        },
        arrendador: {
          idArrendador: this.loggedUser.idArrendador // Ensuring it is an object
        },
        arrendatario: {
          idArrendatario: 10 // Ensuring it is an object
        }
      };
  
      this.propSrv.crearSolicitudArriendo(solicitud).subscribe({
        next: (res) => {
          console.log('Reserva Solicitada:', res);
          this.isDatePickerVisible = false; // Hide datepicker after successful reservation
        },
        error: (error) => {
          console.error('Error creating reservation:', error);
        }
      });
    } else {
      console.error('Start and/or end date are missing.');
    } 
      alert('Reserva Solicitada');
      
  }
  }

