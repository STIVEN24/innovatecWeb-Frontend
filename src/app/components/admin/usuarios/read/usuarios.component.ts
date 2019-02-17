import { Component, OnInit } from '@angular/core';

import { CuentaService } from '../../../../services/cuenta.service';

@Component({
  selector: 'app-user-read',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  usuarios: any = [];

  constructor(private cuentaService: CuentaService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.cuentaService.getUsers().subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.log(err)
    );
  }

  deleteUser(id: number) {
    this.cuentaService.deleteUser(id).subscribe(
      res => {
        this.getUsuarios();
      },
      err => console.log(err)
    )
  }

}