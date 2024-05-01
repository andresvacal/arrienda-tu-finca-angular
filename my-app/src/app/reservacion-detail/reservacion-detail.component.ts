import { Component, OnInit } from '@angular/core';
import { PropiedadService } from '../services/propiedad.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservacion-detail',
  templateUrl: './reservacion-detail.component.html',
  styleUrl: './reservacion-detail.component.css'
})
export class ReservacionDetailComponent implements OnInit {
  reservation: any;

  constructor(
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
    debugger;
    this.propiedadService.getreservacionById(reservationId).subscribe(
      (data: any) => this.reservation = data,
      error => console.error('Error fetching reservation details', error)
    );
  }
}