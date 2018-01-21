import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/Inicio/inicio.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
