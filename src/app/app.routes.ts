import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/Inicio/inicio.component';
import { NopagefoundComponent } from 'app/components/shared/404/nopagefound/nopagefound.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: '', component: NopagefoundComponent }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
