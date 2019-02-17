import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routingModule } from './modules/routing.module';

import { AppComponent } from './app.component';
import { indexComponent } from './components/index/index.component';

// --- public --- //
import { header } from './components/public/header/header';
import { footer } from './components/public/footer/footer';

// --- --- admin --- --- //
// --- users --- //
import { UsuariosComponent } from './components/admin/usuarios/read/usuarios.component';

// --- rols --- //
import { RolesComponent } from './components/admin/roles/read/roles.component';
import { RolFormComponent } from './components/admin/roles/forms/rol.component';

// --- auth --- //
import { logIn } from './components/auth/logIn/logIn';
import { signUp } from './components/auth/signUp/signUp';

// --- proyectos de investigación --- //
import { PotabilizacionComponent }  from './components/proyectos-investigacion/potabilizacion/potabilizacion.component';
import { AlumbradoComponent } from './components/proyectos-investigacion/alumbrado/alumbrado.component';
import { IntegracionComponent } from './components/proyectos-investigacion/integracion/integracion.component';
import { ReguladoresComponent } from './components/proyectos-investigacion/reguladores/reguladores.component';
import { RefrigeracionComponent } from './components/proyectos-investigacion/refrigeracion/refrigeracion.component';
import { GestionarComponent } from './components/proyectos-investigacion/gestionCarga/gstionar.component';
import { SolarComponent } from './components/proyectos-investigacion/solares/solar.component';

// --- services --- //
import { CuentaService } from './services/cuenta.service';
import { ToastService } from './services/elements/toasts.service';
import { TipoDocumentoService } from './services/tipoDocumento.service';

@NgModule({
  declarations: [
    AppComponent,
    indexComponent,
    // --- public --- //
    header,
    footer,
    // --- proyectos de investigación --- //
    PotabilizacionComponent,
    AlumbradoComponent,
    IntegracionComponent,
    ReguladoresComponent,
    RefrigeracionComponent,
    GestionarComponent,
    SolarComponent,
    // --- --- admin --- --- //
    // --- users --- //
    UsuariosComponent,
    // --- rols --- //
    RolesComponent,
    RolFormComponent,
    // --- auth --- //
    logIn,
    signUp
  ],
  imports: [
    BrowserModule,
    routingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [
    CuentaService,
    ToastService,
    TipoDocumentoService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }