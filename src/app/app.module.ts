import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeliculasService } from './services/peliculas.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DetallePComponent } from './components/detalle-p/detalle-p.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { APP_ROUTING } from './app.router';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GaleriaComponent } from './components/home/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DetallePComponent,
    BuscarComponent,
    PeliculaImagenPipe,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [ PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
