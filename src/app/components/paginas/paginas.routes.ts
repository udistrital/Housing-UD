import { RouterModule, Routes } from '@angular/router';

import { PaginasComponent } from 'app/components/paginas/paginas.component';
import { HomeComponent } from 'app/components/paginas/home/home.component';
import { AlojamientosComponent } from 'app/components/paginas/alojamientos/alojamientos.component';
import { PerfilComponent } from 'app/components/paginas/perfil/perfil.component';
import { AlojamientoComponent } from 'app/components/paginas/alojamiento/alojamiento.component';
import { EntrevistaComponent } from 'app/components/paginas/entrevista/entrevista.component';
import { AuthGuardService } from 'app/services/auth-guard.service';
import { PostulacionComponent } from 'app/components/paginas/postulacion/postulacion.component';
import { NopagefoundComponent } from 'app/components/shared/404/nopagefound/nopagefound.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PaginasComponent,
        children: [
         { path: 'home', component: HomeComponent},
         { path: 'alojamientos', component: AlojamientosComponent},
         { path: 'perfil/:id', component: PerfilComponent}, // ver la informacion del perfil de un estudiante en firebase
         { path: 'alojamiento', component: AlojamientoComponent},
         { path: 'postular-alojamiento', component: PostulacionComponent },
         {
           path: 'entrevista', component: EntrevistaComponent,
           canActivate: [AuthGuardService ]
         },
         { path: '', pathMatch: 'full', redirectTo: '/home' },
         { path: '**', component: NopagefoundComponent }
       ]
     },
];

export const PAGINAS_ROUTING = RouterModule.forChild(pagesRoutes);
