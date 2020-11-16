import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: any = {};
  errorMessage = '';

  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.saveViaje(this.form, this.tokenStorageService.getUser()).subscribe(
      data => {
        if (data) {
          window.location.reload();
        }
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }
}
