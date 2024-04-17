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

  constructor(private activatedRoute: ActivatedRoute, private propSrv: PropiedadService) {}

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
}
