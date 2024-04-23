import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  apiEndpoint = 'https://gruposjaveriana.dynaco.co/grupo27/';
  constructor(private http:HttpClient) { }

  registrarUsuario(obj:any){
    console.log(obj);
   return this.http.post(this.apiEndpoint + 'arrendatario/GuardarArrendatario', obj)
  }
  loginUser(obj:any){
    console.log(obj);
   return this.http.post(this.apiEndpoint + 'arrendatario/GuardarArrendatario', obj)
  }
  
  ObtenerPropiedades() {
return this.http.get(this.apiEndpoint + 'propiedad/Verpropiedades');
  }
  ObtenerPropiedad(propiedadid:string) {
    return this.http.get(this.apiEndpoint + 'propiedad/Verpropiedad/' + propiedadid);
  }
}
