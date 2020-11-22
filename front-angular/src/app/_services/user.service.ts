import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/viajes/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getViajes(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'json' });
  }

  getViaje(id): Observable<any> {
    return this.http.get(API_URL+id, { responseType: 'json' });
  }


  //
  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'mod', { responseType: 'text' });
  // }
  //
  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'admin', { responseType: 'text' });
  // }

  // VIAJES SERVICIOS
  delete(id){
    return this.http.delete(API_URL + id, {responseType: 'text'})
  }

  saveViaje(viaje, user): Observable<any> {
    return this.http.post(API_URL, {
      nombre: viaje.titulo,
      ciudad_origen: viaje.ciudad_origen,
      ciudad_destino: viaje.ciudad_destino,
      fecha_inicio: viaje.fecha_inicio,
      fecha_fin: viaje.fecha_fin,
      descripcion: viaje.descripcion,
      usuario: {
        id_usuario: user.id
      }
    }, httpOptions);
  }


}
