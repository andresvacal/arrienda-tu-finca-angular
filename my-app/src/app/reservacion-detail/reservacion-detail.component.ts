import { Component, OnInit } from '@angular/core';
import { PropiedadService } from '../services/propiedad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservacion-detail',
  templateUrl: './reservacion-detail.component.html',
  styleUrl: './reservacion-detail.component.css'
})
export class ReservacionDetailComponent implements OnInit {
  reservation: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private propiedadService: PropiedadService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: { get: (arg0: string) => any; }) => {
      const reservationId = Number(params.get('idSolicitud'));
      this.loadReservationDetails(reservationId);
    });
  }

  loadReservationDetails(reservationId: number) {
    this.propiedadService.getreservacionById(reservationId).subscribe(
      (data: any) => this.reservation = data,
      error => console.error('Error fetching reservation details', error)
    );
  }
  submitPayment() {
    // Implement your payment processing logic here
    // For example, assume the payment is processed and now we navigate

    if (this.reservation) {
      // Redirect to detailed reservation view with reservation ID, arrendador ID, and arrendatario ID
      this.router.navigate([
        '/Reserva',
        this.reservation.idSolicitud,
        this.reservation.arrendador.idArrendador,
        this.reservation.arrendatario.idArrendatario
      ]);
    } else {
      console.error('Reservation details are not loaded.');
    }
  }
  
}