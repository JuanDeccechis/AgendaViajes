import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content = '';

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  reporteUsuarios(event){
    this.userService.getReporteUsuarios().subscribe(
      data => {
        console.log(data);
        
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

  }

  reporteZonas(event){
    this.userService.getReporteZonas().subscribe(
      data => {
        console.log(data);

        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

  }
}
