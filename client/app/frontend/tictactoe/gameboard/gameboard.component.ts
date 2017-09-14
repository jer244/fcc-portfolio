import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

  constructor() {}
  
  compTurn: boolean = false;
  player: string = 'X';
  message: string = '';
  cellArray = Array(9).fill(null);

  ngOnInit() {}

  cellClick(index: number) {
    if (!this.compTurn && !this.cellArray[index]) {
      this.cellArray[index] = this.player;
      if (this.checkWin()) {
        this.message= this.player + " wins!!";
        this.resetBoard();
      } else
        this.player = this.player == "X" ? "O" : "X";
    }
    console.log(this.cellArray);
  }

  resetBoard() {
    this.cellArray = Array(9).fill(null);
    this.player = 'X';
  }

  checkWin() {
    const winLines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < 8; i++) {
      if (this.cellArray[winLines[i][0]] &&
        (this.cellArray[winLines[i][0]] === this.cellArray[winLines[i][1]]) &&
        (this.cellArray[winLines[i][1]] === this.cellArray[winLines[i][2]])) {
        return true;
      }
    }
    return false;
  }
}

