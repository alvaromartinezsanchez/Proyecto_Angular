import { Component, OnInit } from '@angular/core';
//Importamos componentes del router
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string;
  public apellido: string;

  //Importa componentes en el constructor para poder utilizarlos dentro del componente pagina
  constructor(private _route: ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {
        this.nombre = params.nombre;
        this.apellido = params.apellido;
    });

  }

  //Redirige a la misma pagina y envia parametros nombre y apellidos
  redireccion(){
    this._router.navigate(['/pagina-de-pruebas', 'Alvaro', 'Martinez']);
  }

}
