import { Injectable, Pipe } from '@angular/core';
import { Jsonp, Http} from '@angular/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "ed85b8a029aed63d3e29943eb0f442a4";
  private urlMovieDB:string = "https://api.themoviedb.org/3";

  peliculas:any[] = [];

  constructor( private jsonp:Jsonp,
              private http:Http) { }


  getCartelera() {
    
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );

    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth()+1 }-${ desde.getDate() }- `;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth()+1 }-${ hasta.getDate() }- `;
    
    
    let url = `${ this.urlMovieDB }/movie/now_playing?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    //let url = `${ this.urlMovieDB }/movie/now_playing&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
              .pipe(map( res => res.json().results));


  }            

  getPopulares(){
    let url = `${ this.urlMovieDB }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
              .pipe(map( res => res.json().results));
  }

  getPopularesNinos(){
    let url = `${ this.urlMovieDB }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
              .pipe(map( res => res.json().results));
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMovieDB }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
            .pipe(map( res => {
              this.peliculas = res.json().results;
              return res.json().results            
            }));
  }

  getPelicula( id:string ){
    let url = `${ this.urlMovieDB }/movie/${ id }?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
              .pipe(map( res => res.json()));
  }
}
