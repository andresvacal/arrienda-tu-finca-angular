import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  apiEndpoint = 'http://localhost:8080/grupo27/';
  apiEndpoint2 = '/api';

  constructor(private http: HttpClient) { }

  // Método para autenticar al usuario y obtener el token JWT
  authenticateUser(obj : any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.http.post<{ token: string }>(`${this.apiEndpoint2}/jwt/security/autenticar/autenticar`, obj, { headers }).pipe(
      tap(tokenResponse => {
        if (tokenResponse && tokenResponse.token) {
          localStorage.setItem('token', tokenResponse.token);
          console.log("Token guardado:", tokenResponse.token);
        }
      }),
      catchError(error => {
        console.error('Error al obtener el token JWT:', error);
        return throwError(() => new Error('Error al obtener el token JWT'));
      })
    );
  }

  // Método para crear los encabezados de autorización
  private createAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    console.log("Token enviado en el encabezado:", token);
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  // Métodos que requieren el token JWT

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
