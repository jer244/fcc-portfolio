import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fp-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() scores: Object = {};
}
