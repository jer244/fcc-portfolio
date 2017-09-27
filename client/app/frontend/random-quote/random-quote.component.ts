import { Component, OnInit } from '@angular/core';
import { QuoteService } from "app/frontend/random-quote/quote.service";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Quote } from './quote';


@Component({
  selector: 'fp-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.scss'],
  providers: [QuoteService]
})
export class RandomQuoteComponent implements OnInit {

  currentQuote: Quote = {
    quote: '',
    author: '',
    category: ''
  };
  counter: number = 0;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.seedQuotes()
      .subscribe(() => this.getQuote());
  }
  getQuote() {
    if (this.counter < 100) {
      this.currentQuote = this.quoteService.getQuote(this.counter);
      this.counter++;
    } else {
      this.counter = 0;
      this.quoteService.seedQuotes()
        .subscribe(() => this.getQuote());
    }
  }
  tweetQuote() {
    this.quoteService.tweetQuote(this.currentQuote.quote, this.currentQuote.author);
  }
}

