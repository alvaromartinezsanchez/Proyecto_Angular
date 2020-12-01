import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ ArticleService ],
})
export class ArticleComponent implements OnInit {

  public article: Article;

  constructor(public _articleService: ArticleService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response =>{
          if(response.article){
            this.article = response.article;
          }else{
            this._router.navigate(['/home']);
          }
        },
        error =>{
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id){
    this._articleService.delete(id).subscribe(
      response => {
        this._router.navigate(['/blog']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
