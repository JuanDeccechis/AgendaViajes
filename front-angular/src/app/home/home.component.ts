import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: string;
  tables = [
    {
      "nombre":"Nombre",
    },
    {
      "nombre":"Destino",
    },
    {
      "nombre":"Origen",
    }
    ,
    {
      "nombre":"Fecha Inicio",
    }
    ,
    {
      "nombre":"Fecha Fin",
    }
    ,
    {
      "nombre":"Descripcion",
    },
    {
      "nombre":"Accion",
    }
  ]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getViajes().subscribe(
      data => {
        this.content = data;
        this.vie(data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  deleteViaje(id){
   this.userService.delete(id).subscribe(res => {
     if (res) {
         window.location.reload();
     }
   })
 }

  vie(data){
    console.log(data);

  }
}
