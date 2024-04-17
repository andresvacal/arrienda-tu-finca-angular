import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  apiEndpoint = 'https://gruposjaveriana.dynaco.co/grupo27/';
  constructor(private http:HttpClient) { }

  ObtenerPropiedades() {
return this.http.get(this.apiEndpoint + 'propiedad/Verpropiedades');
  }
  ObtenerPropiedad(propiedadid:string) {
    return this.http.get(this.apiEndpoint + 'propiedad/Verpropiedad/' + propiedadid);
  }
}
