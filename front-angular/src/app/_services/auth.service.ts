import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8081/usuarios/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    const formData = new FormData();
    formData.append('username', credentials.username);
    formData.append('password', credentials.password);
    return this.http.post(AUTH_API + 'login', formData);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      nombre: user.firstname,
      apellido: user.lastname,
      dni: user.dni,
      direccion: "null",
      nombre_usuario: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
