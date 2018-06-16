import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { DetallePComponent } from './components/detalle-p/detalle-p.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: BuscarComponent },
    { path: 'search/:texto', component: BuscarComponent },
    { path: 'pelicula/:id/:pag', component: DetallePComponent },
    { path: 'pelicula/:id/:pag/:busqueda', component: DetallePComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' },
    { path: '', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);