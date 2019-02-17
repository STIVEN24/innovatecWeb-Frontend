import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { indexComponent } from '../components/index/index.component';

// --- --- admin --- --- //
// --- usuarios --- //
import { UsuariosComponent } from '../components/admin/usuarios/read/usuarios.component';

// --- roles --- //
import { RolesComponent } from '../components/admin/roles/read/roles.component';
import { RolFormComponent } from '../components/admin/roles/forms/rol.component';

// --- auth --- //
import { logIn } from '../components/auth/logIn/logIn';
import { signUp } from '../components/auth/signUp/signUp';

// --- proyectos de investigación --- //
import { PotabilizacionComponent } from '../components/proyectos-investigacion/potabilizacion/potabilizacion.component';
import { AlumbradoComponent } from '../components/proyectos-investigacion/alumbrado/alumbrado.component';
import { IntegracionComponent } from '../components/proyectos-investigacion/integracion/integracion.component';
import { ReguladoresComponent } from '../components/proyectos-investigacion/reguladores/reguladores.component';
import { RefrigeracionComponent } from '../components/proyectos-investigacion/refrigeracion/refrigeracion.component';
import { GestionarComponent } from '../components/proyectos-investigacion/gestionCarga/gstionar.component';
import { SolarComponent } from '../components/proyectos-investigacion/solares/solar.component';

const routes: Routes = [
  { path: '', component: indexComponent },

  // --- --- admin --- --- //
  // --- usuarios --- //
  { path: 'admin/usuarios', component: UsuariosComponent },
  { path: 'admin/usuarios/create', component: signUp },
  { path: 'admin/usuario/update/:id', component: signUp },
  // --- rols --- //
  { path: 'admin/roles', component: RolesComponent },
  { path: 'admin/rol/create', component: RolFormComponent },

  // --- auth --- //
  { path: 'logIn', component: logIn },
  { path: 'signUp', component: signUp },
  { path: 'update/:id', component: signUp },

  // --- proyectos de investigación --- //
  { path: 'proyectos_investigacion/potabilizacion', component: PotabilizacionComponent },
  { path: 'proyectos_investigacion/alumbrado', component: AlumbradoComponent },
  { path: 'proyectos_investigacion/integracion', component: IntegracionComponent },
  { path: 'proyectos_investigacion/reguladores', component: ReguladoresComponent },
  { path: 'proyectos_investigacion/refrigeracion', component: RefrigeracionComponent },
  { path: 'proyectos_investigacion/gestionar', component: GestionarComponent },
  { path: 'proyectos_investigacion/solares', component: SolarComponent },

  // --- page not found --- //
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class routingModule { }