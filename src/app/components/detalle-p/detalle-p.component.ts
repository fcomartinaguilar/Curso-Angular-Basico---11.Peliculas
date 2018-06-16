import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-p',
  templateUrl: './detalle-p.component.html',
  styleUrls: ['./detalle-p.component.css']
})
export class DetallePComponent implements OnInit {

  pelicula:any;
  regresarA:string;
  busqueda:string;

  constructor( public _ps:PeliculasService,
               public router:ActivatedRoute) { 

      this.router.params.subscribe( parametros => {
        this.regresarA = parametros['pag'];
        if ( parametros['busqueda'] ) {
          this.busqueda = parametros['busqueda'];
        }
        this._ps.getPelicula(parametros['id'] )
            .subscribe( pelicula => {
                this.pelicula = pelicula;
                return this.pelicula;
            })
  
  })
}

  ngOnInit() {
  }

}
