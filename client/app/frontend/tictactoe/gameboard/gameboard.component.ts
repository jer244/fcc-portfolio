import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

  constructor() { }
  compTurn: boolean = false;
  cellArray=Array(9).fill(null);

  ngOnInit() {
  }
  cellClick(id: number){
    if(!this.compTurn)
    console.log(id);
  }
}
