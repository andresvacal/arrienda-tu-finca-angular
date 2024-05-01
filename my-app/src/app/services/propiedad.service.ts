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
   return this.http.post(this.apiEndpoint + 'arrendador/GuardarArrendador', obj)
  }
  loginUser(obj:any){
    console.log(obj);
   return this.http.post(this.apiEndpoint + 'arrendador/login', obj)
  }
  registerproperty(obj: any, userId: any) {
    console.log(obj);
    debugger;
    return this.http.post(`${this.apiEndpoint}propiedad/GuardarPropiedad/${userId}`, obj);
  }
  ObtenerPropiedades() {
return this.http.get(this.apiEndpoint + 'propiedad/Verpropiedades');
  }
  ObtenerPropiedad(propiedadid:string) {
    return this.http.get(this.apiEndpoint + 'propiedad/Verpropiedad/' + propiedadid);
  }
  crearSolicitudArriendo(data: any) {
    console.log(data);
    alert('Propiedad guardada');
    return this.http.post(this.apiEndpoint + 'solictudaArriendo/CrearSolicitudArriendo', data);
  }
  loadReservationsByUserId(arrendadorId: number) {
    return this.http.get(`${this.apiEndpoint}solictudaArriendo/SolicitudArriendoUsuario/${arrendadorId}`, {});
  }
  getUserById(userId: number) {
    return this.http.get(`${this.apiEndpoint}arrendador/${userId}`);
  }
  changeUserById(userId: number, data: any) {
    return this.http.put(`${this.apiEndpoint}arrendador/${userId}`, data);
  }
  deleteUserById(userId: number) {
    return this.http.delete(`${this.apiEndpoint}arrendador/${userId}`);
  }
  getreservacionById(reservacionId: number) { 
    return this.http.get(`${this.apiEndpoint}solictudaArriendo/Solicitud/${reservacionId}`);
  }
}
