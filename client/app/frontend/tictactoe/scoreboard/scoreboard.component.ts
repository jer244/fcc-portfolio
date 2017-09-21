import { Component, Input } from '@angular/core';

@Component({
  selector: 'fp-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent{
  @Input() scores: Object = {};
}
