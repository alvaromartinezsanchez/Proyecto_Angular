import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  public peliculas: Pelicula[];

  constructor() { 
    this.peliculas = [
      new Pelicula("Spiderman 4", 2019, "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/10/marvels-spider-man-remastered-2109699.jpg?itok=7XMq7n0j"),
      new Pelicula("Los vengadores", 2018, "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/08/11/15971559642829.jpg"),
      new Pelicula("Batman vs Superman", 2016, "https://i1.wp.com/www.vinilonegro.com/wp-content/uploads/2016/03/Batman-v-Superman-3-e1459165974655.jpg?fit=600%2C400&ssl=1"),
    ];
  }

  getPeliculas(){
    return this.peliculas;
  }
}
