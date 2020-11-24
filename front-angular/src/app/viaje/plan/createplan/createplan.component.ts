import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../_services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createplan',
  templateUrl: './createplan.component.html',
  styleUrls: ['./createplan.component.css']
})
export class CreateplanComponent implements OnInit {
  formTransporte: any = {};
  formAlojamiento: any = {};
  errorMessage = '';
  id: number;
  viewTransporte: any;
  viewAlojamiento: any;
  tipoForm: any;

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
      this.id = this.route.snapshot.params['viajeId'];
      console.log(this.id);
  }

  selectForm() {
    if (this.tipoForm === "alojamiento") {
      this.viewTransporte = false;
      this.viewAlojamiento = true;
    } else if(this.tipoForm == "transporte"){
      this.viewAlojamiento = false;
      this.viewTransporte = true;

    } else{
      this.viewTransporte =false;
      this.viewAlojamiento = false;
    }
    console.log(this.tipoForm);

  }

  onSubmit() {
    if(this.tipoForm == "transporte"){
      this.userService.savePlanTransporte(this.formTransporte,this.id).subscribe(
        data => {
          if (data) {
            window.location.reload();
          }
        },
        err => {
          console.log(err.error.message);

          this.errorMessage = err.error.message;
        }
      );
    } else {
      this.userService.savePlanAlojamiento(this.formAlojamiento,this.id).subscribe(
        data => {
          if (data) {
            window.location.reload();
          }
        },
        err => {
          console.log(err.error.message);

          this.errorMessage = err.error.message;
        }
      );

    }


  }

}
