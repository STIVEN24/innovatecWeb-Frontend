import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cuenta } from '../../../../models/cuenta';
import { CuentaService } from '../../../../services/cuenta.service';
import { RolService } from '../../../../services/rol.service';

@Component({
  templateUrl: './usuario.component.html'
})
export class UsuarioFormComponent implements OnInit {

  cuenta: Cuenta = {
    id_cuenta: 0,
    id_tipo_documento: 0,
    documento: 0,
    primer_nombre: '',
    segundo_nombre: '',
    primer_apellido: "",
    segundo_apellido: '',
    celular: 0,
    correo: "",
    id_rol: 0
  };

  rols: any = [];

  update: boolean = false;

  constructor(private cuentaService: CuentaService, private router: Router, private rolService: RolService, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getRols();
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.cuentaService.getUser(params.id)
        .subscribe(
          res => {
            //this.cuenta = res;
            this.update = true;
          },
          err => console.log(err)
        );
    }
  }

  createUser() {
    this.cuentaService.createUser(this.cuenta)
      .subscribe(
        res => {
          this.router.navigate(['/users']);
        },
        err => console.log(err)
      )
  }

  // updateUser() {
  //   this.cuentaService.updateUser(this.cuenta.id_cuenta, this.cuenta)
  //     .subscribe(
  //       res => {
  //         this.router.navigate(['/admin/users']);
  //       },
  //       err => console.log(err)
  //     );
  // }

  getRols() {
    this.rolService.getRols().subscribe(
      res => {
        this.rols = res;
        // if (this.rols.indexOf(this.rols[0]) > -1) this.rols.splice(this.rols.indexOf(this.rols[0]), 1);
        console.log(res);
      },
      err => console.log(err)
    );
  }

}