import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  viajes = '';
  regiones = [
    {
      "nombre":"Elegir..",
    },
    {
      "nombre":"Norteamerica",
    },
    {
      "nombre":"Sudamerica",
    },
    { 
      "nombre":"America Central",
    }
    ,
    {
      "nombre":"Caribe",
    }
    ,
    {
      "nombre":"Asia Central y Meridional",
    }
    ,
    {
      "nombre":"Noroeste Asiatico",
    },
    {
      "nombre":"Sudeste Asiatico",
    },
    {
      "nombre":"Australia",
    }, 
    {
      "nombre":"Oceania",
    }, 
    {
      "nombre":"Europa del Norte",
    }, 
    {
      "nombre":"Europa del Sur",
    }, 
    {
      "nombre":"Europa del Este",
    }, 
    {
      "nombre":"Europa Occidental",
    }, 
    {
      "nombre":"Oriente Medio",
    }, 
    {
      "nombre":"Norte de Africa",
    }, 
    {
      "nombre":"Sur de Africa",
    }
  ]

  region = 'Elegir..';
  estado = 'null';
  
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.userService.getViajes().subscribe(
      data => {
        this.viajes = data;
        console.log(data);
        
      },
      err => {
        this.viajes = JSON.parse(err.error).message;
      }
      );
      
    }


    
  }
  