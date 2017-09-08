import { Component, OnInit } from '@angular/core';
import { QuoteService } from "app/random-quote/quote.service";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Quote } from './quote';


@Component({
  selector: 'fp-random-quote',
  templateUrl: './random-quote.component.html',
  styleUrls: ['./random-quote.component.scss']
})
export class RandomQuoteComponent implements OnInit {

  currentQuote: Quote = {
    quote: '',
    author: '',
    category: ''
  };
  counter: number = 0;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.quoteService.seedQuotes()
      .subscribe(() => this.getQuote());
  }
  getQuote() {
    if (this.counter < 100) {
      this.currentQuote = this.quoteService.getQuote(this.counter);
      this.counter++;
      console.log(this.currentQuote.category)
    } else {
      this.counter = 0;
      this.quoteService.seedQuotes()
        .subscribe(() => this.getQuote());
    }
  }
}

