import { Component } from '@angular/core';

@Component({
  selector: 'fp-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent {

  constructor() { }

  //game state
  vsComp: boolean = false;
  compTurn: boolean = false;
  userSymbol: string = 'X';
  compSymbol: string = 'O';
  symbols: string[] = ['X', 'O'];
  currentTurn: string = 'X';
  message: string = '';
  cellArray = Array(9).fill(null);

  startCompGame() {
    this.compSymbol = this.userSymbol == "X" ? "O" : "X";
    this.resetBoard(0);
  }

  cellClick(index: number) {
    console.log('vsComp: ' + this.vsComp + ', compTurn: ' + this.compTurn)
    //allow move if not computer's turn and cell is empty
    if (!this.compTurn && !this.cellArray[index]) {
      this.cellArray[index] = this.currentTurn;
      //alert and reset if win
      if (this.checkWin()) {
        this.message = this.currentTurn + " wins!!";
        this.resetBoard(1000);
        return;
      } //alert and reset if draw
      else if (this.checkDraw()) {
        this.message = "Draw!";
        this.resetBoard(1000);
        return;
      } //switch symbol and make comp move if vs computer
      else {
        this.currentTurn = this.currentTurn == "X" ? "O" : "X";
        if (this.vsComp) {
          this.compTurn = true;
          this.compMove();
        }
        return;
      }
    }
    console.log(this.cellArray);
  }

  compMove() {
    if (this.compTurn) {
      for (let i = 0; i < 9; i++) {
        console.log(this.cellArray[i]);
        if (!this.cellArray[i]) {
          this.cellArray[i] = this.currentTurn;
          break;
        }
      }
      if (this.checkWin()) {
        this.message = this.currentTurn + " wins!!";
        this.resetBoard(1000);
      } else
        if (this.checkDraw()) {
          this.message = "Draw!";
          this.resetBoard(1000);
        }
      this.currentTurn = this.currentTurn == "X" ? "O" : "X";
      this.compTurn = false;
      return;
    }
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
      [2, 4, 6],
    ];
    return winLines.some((elem, i, array) => {
      return (this.cellArray[elem[0]] &&
        (this.cellArray[elem[0]] === this.cellArray[elem[1]]) &&
        (this.cellArray[elem[1]] === this.cellArray[elem[2]]))
    })
  }

  checkDraw() {
    return this.cellArray.every((elem, index, array) => { return elem != null })
  }

  resetBoard(offset: number) {
    setTimeout(() => {
      this.message = '';
      this.cellArray.fill(null);
      this.currentTurn = 'X';
      if (this.vsComp && this.compSymbol == 'X') {
        this.compTurn = true;
        this.compMove();
      }
    }, offset);
  }
}

