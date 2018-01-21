import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Directivas
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';

// RUTAS
import { APP_ROUTING } from './app.routes';

// SERVICIOS
import { AlojamientosService } from './services/alojamientos.service';
import { UsuarioService } from './services/usuario.service';
import { UniversidadesService } from './services/universidades.service';
import { AuthGuardService } from './services/auth-guard.service';
// MODULOS

// paginacion
import {NgxPaginationModule} from 'ngx-pagination';

// Autenticacion
import { OAuthModule } from 'angular-oauth2-oidc';


// Form wizard
import { FormWizardModule } from 'angular2-wizard';
// Tooltip
import {ToolTipModule} from 'angular2-tooltip'

// Modulo de mapas
import { AgmCoreModule } from '@agm/core';

// COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/paginas/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AlojamientosComponent } from './components/paginas/alojamientos/alojamientos.component';
import { ModalInformacionComponent } from './components/shared/modal-informacion/modal-informacion.component';
import { PerfilComponent } from './components/paginas/perfil/perfil.component';
import { PostulacionComponent } from './components/paginas/postulacion/postulacion.component';
import { InformacionPerfilComponent } from './components/shared/informacion-perfil/informacion-perfil.component';
import { AlojamientoComponent } from './components/paginas/alojamiento/alojamiento.component';
import { InicioComponent } from './components/Inicio/inicio.component';
import { EntrevistaComponent } from './components/paginas/entrevista/entrevista.component';
import { NopagefoundComponent } from './components/shared/404/nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './components/shared/breadcrumbs/breadcrumbs.component';


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
    NgDropFilesDirective,
    EntrevistaComponent,
    NopagefoundComponent,
    BreadcrumbsComponent
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
   UniversidadesService,
   AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
