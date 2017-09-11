import { Component, OnInit } from '@angular/core';
import { Response, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { WikiService } from "app/wiki/wiki.service";

@Component({
  selector: 'fp-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss'],
  providers: [WikiService]
})
export class WikiComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }
  getRandom(){
    window.open('https://en.wikipedia.org/wiki/Special:Random', "blank")
  }

}
