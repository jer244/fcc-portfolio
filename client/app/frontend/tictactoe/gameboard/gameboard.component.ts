import { Component } from '@angular/core';

@Component({
  selector: 'fp-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent {

  constructor() {}

  //game state
  vsComp: boolean = false;  
  compTurn: boolean = false;
  userSymbol: string = '';
  compSymbol: string = '';
  symbols: string[] = ['X', 'O'];
  player: string = 'X';
  message: string = '';
  cellArray = Array(9).fill(null);

  cellClick(index: number) {
    console.log('vsComp: ' + this.vsComp + ', compTurn: ' + this.compTurn)
    //allow move if not computer's turn and cell is empty
    if (!this.compTurn && !this.cellArray[index]) {
      this.cellArray[index] = this.player;
      //alert and reset if win
      if (this.checkWin()) {
        this.message = this.player + " wins!!";
        this.resetBoard();
        return;
      } //alert and reset if draw
      else if (this.checkDraw()) {
        this.message = "Draw!";
        this.resetBoard();
        return;
      } //switch symbol and make comp move if vs computer
      else {
        this.player = this.player == "X" ? "O" : "X";
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
    if(this.compTurn){
    for(let i = 0; i < 9; i++) {
      console.log(this.cellArray[i]);
      if (!this.cellArray[i]) {
        this.cellArray[i] = this.player;
        this.player = this.player == "X" ? "O" : "X";         
        break;
      }
    }
    if (this.checkWin()) {
      this.message = this.player + " wins!!";
      this.resetBoard();
    }else
    if (this.checkDraw()) {
      this.message = "Draw!";
      this.resetBoard();
     }
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
                      return  (this.cellArray[elem[0]] &&
                              (this.cellArray[elem[0]] === this.cellArray[elem[1]]) &&
                              (this.cellArray[elem[1]] === this.cellArray[elem[2]]))
                          })
  }

  checkDraw() {
    return this.cellArray.every((elem, index, array)=>{return elem!=null})
  }

  resetBoard() {
    this.cellArray.fill(null);
    this.player = 'X';
    setTimeout(() => this.message = '', 1000);

  }
}

