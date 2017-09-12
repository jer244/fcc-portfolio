import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { WikiService } from "app/wiki/wiki.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'fp-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss'],
  providers: [WikiService]
})
export class WikiComponent implements OnInit {

  constructor(private http: Http, private wikiService: WikiService) {}
  currentSearch: string;
  results: Object = {};

  ngOnInit() {}

  getRandom() {
    window.open('https://en.wikipedia.org/wiki/Special:Random', "blank")
  }

  onSubmit(f: NgForm) {
    this.currentSearch = f.value.search;
    this.wikiService.wikiSearch(this.currentSearch)
      .subscribe((res) => {
        if (res.query) {
          this.results = res.query.pages;
        }
      })
  }

  keys(): Array < string > {
    return Object.keys(this.results);
  }

  clearSearch() {
    this.results = {};
    this.currentSearch = null;
  }
}

