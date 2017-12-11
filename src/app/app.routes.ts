import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { AlojamientosComponent } from './components/alojamientos/alojamientos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PostulacionComponent } from './components/postulacion/postulacion.component';
import { AlojamientoComponent } from './components/alojamiento/alojamiento.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EntrevistaComponent } from "./components/entrevista/entrevista.component";



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'alojamientos', component: AlojamientosComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'postulacion', component: PostulacionComponent},
  { path: 'alojamiento', component: AlojamientoComponent},
  { path: 'entrevista', component: EntrevistaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }


];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
