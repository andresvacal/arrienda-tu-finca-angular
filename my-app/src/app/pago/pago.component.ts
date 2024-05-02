import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PropiedadService } from '../services/propiedad.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  reservation: any;  

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private propiedadService: PropiedadService) { }

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
}
