import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
=======

import { InicioComponent } from './components/Inicio/inicio.component';
import { PaginasComponent } from './components/paginas/paginas.component';


import { HomeComponent } from './components/paginas/home/home.component';

import { AlojamientosComponent } from './components/paginas/alojamientos/alojamientos.component';
import { PerfilComponent } from './components/paginas/perfil/perfil.component';

import { AlojamientoComponent } from './components/paginas/alojamiento/alojamiento.component';
import { EntrevistaComponent } from './components/paginas/entrevista/entrevista.component';
import { AuthGuardService } from './services/auth-guard.service';
import { NopagefoundComponent } from './components/shared/404/nopagefound/nopagefound.component';
>>>>>>> 1143571d6af4063ac5bf7f6edfe1ebfa6657bb5f

import { InicioComponent } from './components/Inicio/inicio.component';



const APP_ROUTES: Routes = [
<<<<<<< HEAD
  { path: 'inicio', component: InicioComponent}
=======
  { path: 'inicio', component: InicioComponent},

  {
     path: '',
     component: PaginasComponent,
     children: [
      { path: 'home', component: HomeComponent},
      { path: 'alojamientos', component: AlojamientosComponent},
      { path: 'perfil/:id', component: PerfilComponent}, // ver la informacion del perfil de un estudiante en firebase
      { path: 'alojamiento', component: AlojamientoComponent},
      {
        path: 'entrevista', component: EntrevistaComponent,
        canActivate: [AuthGuardService ]
      },
      { path: '', pathMatch: 'full', redirectTo: '/home' },
    ]
  },
  { path: '**', component: NopagefoundComponent}
>>>>>>> 1143571d6af4063ac5bf7f6edfe1ebfa6657bb5f
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
