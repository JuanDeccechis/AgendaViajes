import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  viajes = '';
  regiones = [];
  viaje_tables = [{"nombre":"Titulo",},{"nombre":"Destino",},{"nombre":"Origen",},{"nombre":"Fecha Inicio",},{"nombre":"Fecha Fin",},{"nombre":"Descripcion",}];

  region = 'Elegir..';
  estado = 'null';

  hasta: any;
  desde: any;
  // region: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.userService.getViajes().subscribe(
    //   data => {
    //     this.viajes = data;
    //     console.log(data);
    //
    //   },
    //   err => {
    //     this.viajes = JSON.parse(err.error).message;
    //   }
    //   );
      this.userService.getZonasGeograficas().subscribe(
        data => {
          this.regiones = data;
          this.regiones.push({
              "nombre": "Elegir.."
          });
          console.log(this.regiones);

        },
        err => {
          this.regiones = JSON.parse(err.error).message;
        }
        );
    }

    generarReporte() {
      console.log(this.region);
      if(this.region != "Elegir.."){
      this.userService.getViajesZonasGeograficas(this.region).subscribe(
        data => {
          this.viajes = data;
        },
        err => {
          this.regiones = JSON.parse(err.error).message;
        }
        );
      }
      if(this.hasta && this.desde){
        console.log(this.hasta+''+this.desde);
        this.userService.getViajesRangoFechas(this.desde, this.hasta).subscribe(
          data => {
            console.log(data);

            this.viajes = data;
          },
          err => {
            this.regiones = JSON.parse(err.error).message;
          }
          );
      }
    }

  }
