import { Component } from '@angular/core';

import { RolService } from '../../../../services/rol.service';

@Component({
    templateUrl: './roles.component.html'
})
export class RolesComponent {

    roles: any = [];

    constructor(private rolService: RolService) { }

    ngOnInit() {
        this.getRoles();
    }

    private getRoles() {
        this.rolService.getRols().subscribe(
            res => this.roles = res,
            err => console.log(err)
        )
    }

    deleteRol(id: number) {
        this.rolService.deleteRol(id).subscribe(
            res => this.getRoles(),
            err => console.log(err)
        )
    }

}