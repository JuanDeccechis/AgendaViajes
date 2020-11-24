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

  getZonasGeograficas(): Observable<any> {
    return this.http.get(API_URL+ 'zonasGeograficas', { responseType: 'json' });
  }

  getViajesZonasGeograficas(zona): Observable<any> {
    return this.http.get(API_URL+ 'porDestino?zonaGeograficaDestino='+zona, { responseType: 'json' });
  }

  getViajesRangoFechas(desde,hasta): Observable<any> {
    return this.http.get(API_URL+ 'porFechas?fechaInicio='+desde+'&fechaFin='+hasta, { responseType: 'json' });
  }

  getReporteUsuarios(): Observable<any> {
    return this.http.get(API_URL+ 'usuariosFavoritos', { responseType: 'json' });
  }

  getReporteZonas(): Observable<any> {
    return this.http.get(API_URL+ 'zonasMasVisitadas', { responseType: 'json' });
  }

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

  savePlanTransporte(plan, id): Observable<any> {
    return this.http.post(API_URL+id+'/plan', {
      type: "Transporte",
      tipo_plan: plan.descripcion,
      fecha_inicio: plan.fecha_inicio,
      fecha_fin: plan.fecha_fin,
      ciudad_origen: plan.ciudad_origen,
      ciudad_destino: plan.ciudad_destino,
      tipo_transporte: plan.tipo_transporte,
      terminal_salida: plan.terminal_salida,
      terminal_llegada: plan.terminal_llegada,
      codigo_reserva: plan.cod_reserva,
      nro_asiento: plan.nro_asiento,
      nro_viaje: plan.nro_viaje
    }, httpOptions);
  }

  savePlanAlojamiento(plan, id): Observable<any> {
    return this.http.post(API_URL+id+'/plan', {
      type: "Alojamiento",
      tipo_plan: plan.descripcion,
      fecha_inicio: plan.fecha_inicio,
      fecha_fin: plan.fecha_fin,
      tipo_alojamiento: plan.tipo_alojamiento,
      direccion: plan.direccion,
      localidad: plan.localidad,
      numero_habitacion: plan.numero_habitacion,
      codigo_reserva: plan.cod_reserva
    }, httpOptions);
  }


}
