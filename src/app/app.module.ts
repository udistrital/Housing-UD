import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Directivas
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { AlojamientosService } from './services/alojamientos.service';
import { UsuarioService } from './services/usuario.service';
import { UniversidadesService } from './services/universidades.service';

//MODULOS

//paginacion
import {NgxPaginationModule} from 'ngx-pagination';

//Autenticacion
import { OAuthModule } from 'angular-oauth2-oidc';

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
import { InformacionPerfilComponent } from './components/shared/informacion-perfil/informacion-perfil.component';
import { AlojamientoComponent } from './components/alojamiento/alojamiento.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormularioUsuariosComponent } from './components/formulario-usuarios/formulario-usuarios.component';
import { LoginComponent } from './components/login/login.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AlojamientosComponent,
    ModalInformacionComponent,
    PerfilComponent,
    PostulacionComponent,
    InformacionPerfilComponent,
    AlojamientoComponent,
    InicioComponent,
    FormularioUsuariosComponent,
    NgDropFilesDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_8h8OFAoL5Z2HDgeH761GUwoadE_kttg'
    }),
    APP_ROUTING,
    FormWizardModule,
    ToolTipModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    OAuthModule.forRoot(),
  ],
  providers: [
   AlojamientosService,
   UsuarioService,
   UniversidadesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
