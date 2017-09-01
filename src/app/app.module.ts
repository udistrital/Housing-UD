import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//RUTAS
import { APP_ROUTING } from './app.routes';
//SERVICIOS
import { AlojamientosService } from './services/alojamientos.service';
import { UsuarioService } from './services/usuario.service';

//MODULOS

//paginacion
import {NgxPaginationModule} from 'ngx-pagination';

//Form wizard
import { FormWizardModule } from 'angular2-wizard';
//Tooltip
import {ToolTipModule} from 'angular2-tooltip'

//Modulo de mapas
import { AgmCoreModule } from '@agm/core';

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { ModalInformacionComponent } from './components/shared/modal-informacion/modal-informacion.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PostulacionComponent } from './components/postulacion/postulacion.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { InformacionPerfilComponent } from './components/shared/informacion-perfil/informacion-perfil.component';
import { AlojamientoComponent } from './components/alojamiento/alojamiento.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioUsuariosComponent } from './components/formulario-usuarios/formulario-usuarios.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AlojamientosComponent,
    ModalInformacionComponent,
    PerfilComponent,
    PostulacionComponent,
    MensajesComponent,
    InformacionPerfilComponent,
    AlojamientoComponent,
    InicioComponent,
    FormularioUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_8h8OFAoL5Z2HDgeH761GUwoadE_kttg'
    }),
    APP_ROUTING,
    FormWizardModule,
    ToolTipModule
  ],
  providers: [
   AlojamientosService,
   UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
