import { Component, OnInit } from '@angular/core';
import { LeftPadPipe } from 'ngx-pipes/src/app/pipes/string/lpad';

@Component({
  selector: 'fp-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.scss']
})
export class SimonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  strict: boolean = false;
  compMove: boolean = true;
  moves: number [] = [];
  count: string = '0';
  inputCount: number = 0;

  toggleStrict(){
    this.strict = !this.strict;
    this.count=String(Number(this.count)+1)
  }

}
