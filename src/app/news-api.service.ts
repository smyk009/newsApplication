import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '83248f9ef2d54c2186b03c8f7c61ae4c';

  constructor(private httpclient: HttpClient) { }

  initSources(){
    return this.httpclient.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles(){
    return this.httpclient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
   }
   getArticlesByID(source: String){
    return this.httpclient.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
   }
}
