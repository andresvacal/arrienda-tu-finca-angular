import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  apiEndpoint = 'http://localhost:8080/grupo27/';
  constructor(private http:HttpClient) { }

  registrarUsuario(obj:any){
    console.log(obj);
   return this.http.post(this.apiEndpoint + 'arrendatario/GuardarArrendatario', obj)
  }
  loginUser(obj:any){
    console.log(obj);
    debugger;
   return this.http.post(this.apiEndpoint + 'arrendatario/login', obj)
  }
  
  ObtenerPropiedades() {
return this.http.get(this.apiEndpoint + 'propiedad/Verpropiedades');
  }
  ObtenerPropiedad(propiedadid:string) {
    return this.http.get(this.apiEndpoint + 'propiedad/Verpropiedad/' + propiedadid);
  }
}
