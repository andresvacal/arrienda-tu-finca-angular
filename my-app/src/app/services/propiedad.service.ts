import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  apiEndpoint = 'http://localhost:8080/grupo27/';
  apiEndpoint2= '/api';
  
  constructor(private http: HttpClient) { }

  registrarUsuario(obj: any): Observable<any> {
    return this.http.post(this.apiEndpoint + 'arrendador/GuardarArrendador', obj);
  }

  loginUser(obj: any): Observable<any> {
    return this.http.post<any>(`${this.apiEndpoint}arrendador/login`, obj).pipe(
      catchError(error => {
        console.error('Error durante la verificación de credenciales:', error);
        return throwError(() => new Error('Error durante la verificación de credenciales'));
      })
    );
  }

  authenticateUser(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const fixedUser = {
      id: 1,
      nombres: "Juan",
      apellidos: "Perez",
      correoElectronico: "juan.perez@example.com",
      telefono: "1234567890",
      password: "securepassword"
    };
    return this.http.post<{ token: string }>(`${this.apiEndpoint2}/jwt/security/autenticar/autenticar`, fixedUser, { headers }).pipe(
      tap(tokenResponse => {
        if (tokenResponse && tokenResponse.token) {
          localStorage.setItem('token', tokenResponse.token);
          console.log(tokenResponse.token);
        }
      }),
      catchError(error => {
        console.error('Error al obtener el token JWT:', error);
        return throwError(() => new Error('Error al obtener el token JWT'));
      })
    );
  }

  private createAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  // Métodos que requieren el token JWT

  registerproperty(obj: any, userId: any): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.post(`${this.apiEndpoint}propiedad/GuardarPropiedad/${userId}`, obj, { headers });
  }

  ObtenerPropiedades(): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.get(this.apiEndpoint + 'propiedad/Verpropiedades', { headers });
  }

  ObtenerPropiedad(propiedadid: string): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.get(this.apiEndpoint + 'propiedad/Verpropiedad/' + propiedadid, { headers });
  }

  crearSolicitudArriendo(data: any): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.post(this.apiEndpoint + 'solictudaArriendo/CrearSolicitudArriendo', data, { headers });
  }

  loadReservationsByUserId(arrendadorId: number): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.get(`${this.apiEndpoint}solictudaArriendo/SolicitudArriendoUsuario/${arrendadorId}`, { headers });
  }

  getUserById(userId: number): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.get(`${this.apiEndpoint}arrendador/${userId}`, { headers });
  }

  changeUserById(userId: number, data: any): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.put(`${this.apiEndpoint}arrendador/${userId}`, data, { headers });
  }

  deleteUserById(userId: number): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.delete(`${this.apiEndpoint}arrendador/${userId}`, { headers });
  }

  getreservacionById(reservacionId: number): Observable<any> {
    const headers = this.createAuthHeaders();
    return this.http.get(`${this.apiEndpoint}solictudaArriendo/Solicitud/${reservacionId}`, { headers });
  }
}
