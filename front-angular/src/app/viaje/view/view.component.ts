import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: number;
  viajes: [];
  viaje_tables = [{"nombre":"Titulo",},{"nombre":"Destino",},{"nombre":"Origen",},{"nombre":"Fecha Inicio",},{"nombre":"Fecha Fin",},{"nombre":"Descripcion",}];
  transporte_tables = [{"nombre":"Nombre",},{"nombre":"Transporte",},{"nombre":"Fecha Inicio",},{"nombre":"Fecha Fin",},{"nombre":"Ciudad Origen",},{"nombre":"Ciudad Destino",},{"nombre":"Terminal Salida",},{"nombre":"Terminal Llegada",},{"nombre":"Nro Asiento",},{"nombre":"Nro Viaje",},{"nombre":"Codigo Reserva",}];
  alojamiento_tables = [{"nombre":"",},{"nombre":"Destino",},{"nombre":"Origen",},{"nombre":"Fecha Inicio",},{"nombre":"Fecha Fin",},{"nombre":"Descripcion",}];

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['viajeId'];
    console.log(this.id);
    this.userService.getViaje (this.id).subscribe(
      data => {
        this.viajes = data;
        console.log(data);

        // console.log(Object.keys(this.viaje.planes[0]));
  });
 }

}
