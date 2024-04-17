import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-propiedad-card',
  templateUrl: './propiedad-card.component.html',
  styleUrls: ['./propiedad-card.component.css']
})
export class PropiedadCardComponent {

@Input() propiedadData: any;

}
  