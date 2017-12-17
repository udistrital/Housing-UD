import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PostulacionComponent } from './components/postulacion/postulacion.component';
import { AlojamientoComponent } from './components/alojamiento/alojamiento.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EntrevistaComponent } from "./components/entrevista/entrevista.component";
import  { AuthGuardService } from "./services/auth-guard.service";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'alojamientos', component: AlojamientosComponent},
  { path: 'perfil/:id', component: PerfilComponent}, //ver la informacion del perfil de un estudiante en firebase
  { path: 'postulacion', component: PostulacionComponent},
  { path: 'alojamiento', component: AlojamientoComponent},
  {
    path: 'entrevista', component: EntrevistaComponent,
    canActivate:[ AuthGuardService ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
