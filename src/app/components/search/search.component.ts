import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ ArticleService ],
})
export class SearchComponent implements OnInit {

  public articles: Article[];

  constructor(public _articleService: ArticleService, private _route: ActivatedRoute, private _router: Router) {

   }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      var search = params['search'];

      this._articleService.search(search).subscribe(
        (response:any) => {
          if(response.articles){
            this.articles = response.articles;
            console.log(response.articles);
          }
        },
        error => {
          console.log(error);
          this.articles = []
        }
      );
    });
  }

}
