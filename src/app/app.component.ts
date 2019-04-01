import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  allArticles: Array<any>;
  allSources: Array<any>;
  
  title = 'news-app';

  constructor(private newsService: NewsApiService){
    console.log('app component constructor called');  
  }

  ngOnInit() {
    this.newsService.initArticles().subscribe(data => this.allArticles = data['articles']);

    this.newsService.initSources().subscribe(data => this.allSources = data['sources']);
  }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsService.getArticlesByID(source).subscribe(data => this.allArticles = data['articles']);
  }
}
