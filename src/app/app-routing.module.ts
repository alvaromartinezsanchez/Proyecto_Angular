import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importa componentes que poseen una pagina exclusiva
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'home', component: HomeComponent },
  { path:'blog', component: BlogComponent },
  { path:'formulario', component: FormularioComponent },
  { path: 'blog/articulo/:id', component: ArticleComponent },
  { path: 'blog/crear', component: ArticleNewComponent },
  { path: 'buscar/:search', component: SearchComponent },
  { path: 'blog/editar/:id', component: ArticleEditComponent },
  //No recibe parametro nombre
  { path:'pagina-de-pruebas', component: PaginaComponent },
  //Recibe un parametro=>/:nombre
  { path:'pagina-de-pruebas/:nombre/:apellido', component: PaginaComponent },
  { path:'peliculas', component: PeliculasComponent },

  // '**'=> Cuando la ruta no existe redirige al componente de error
  { path:'**', component:ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

