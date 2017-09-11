import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Quote } from './quote';

@Injectable()
export class QuoteService {

  constructor(private http: Http) {}
  quotes: Quote[] = [];

  seedQuotes() {
    return this.http.get('https://talaikis.com/api/quotes/')
      .map((res: Response) => res.json() as Quote[])
      .map((data) => {
        this.quotes = data;
      });
  }
  getQuote(index: number) {
    return this.quotes[index];
  }
  tweetQuote(quote: string, author: string) {
    window.open('https://twitter.com/intent/tweet?text=' + quote + ' ' + author, 'twitter');
  }
}



