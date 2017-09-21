import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent implements OnInit {
  /**
   *  Tic Tac Toe game *
   * -can be played either human vs human or human vs computer (vsComp false or true respectively)
   * -cellArray will house the current board
   *  -x will be represented by 1
   *  -o will be represented by 10
   * 
   */
  cellArray = Array(9).fill(0);
  winningCells = Array(9).fill(false);
  vsComp: boolean = false;
  compTurn: boolean = false;
  userSymbol: string = 'X';
  compSymbol: string = 'O';
  symbols: string[] = ['X', 'O'];
  winIndex: number = null;
  values: Object = {
    'X': 1,
    'O': 10,
    '1': 'X',
    '10': 'O'
  };
  wins: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  currentTurn: string = 'X';
  message: string = '';
  scores = {
    'X': 0,
    'O': 0,
    'Draw': 0,
    increment(side) {
      switch (side) {
        case "X":
          this.X++;
          break;
        case "O":
          this.O++;
          break;
        case "Draw":
          this.Draw++;
          break;
      }
    },
    reset() {
      this.X = 0;
      this.O = 0;
      this.Draw = 0;
    }
  }

  constructor() {}

  ngOnInit() {
    this.resetBoard(0);
    this.scores.reset();
  }

  startCompGame() {
    //give the computer the opposite symbol as user and reset the board
    this.compSymbol = this.userSymbol == "X" ? "O" : "X";
    this.resetBoard(0);
  }

  cellClick(index: number) {
    //allow move if not computer's turn and cell is empty
    if (!this.compTurn && !this.cellArray[index]) {
      this.cellArray[index] = this.values[this.currentTurn];
      //alert and reset if win
      if (this.checkWin() != -1) {
        this.message = this.currentTurn + " wins!!";
        this.highlightWin(this.winIndex);
        this.scores.increment(this.currentTurn);
        this.resetBoard(1000);
        return;
      } //alert and reset if draw
      else if (this.checkDraw()) {
        this.message = "Draw!";
        this.scores.increment('Draw');
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
      this.cellArray[this.findBestMove()] = this.values[this.currentTurn];
      if (this.checkWin() != -1) {
        this.message = this.currentTurn + " wins!!";
        this.highlightWin(this.winIndex);
        this.scores.increment(this.currentTurn);
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

  findBestMove() {
    //look for win
    let total = this.compSymbol == 'X' ? 2 : 20;
    console.log(total);
    let index = this.compTest(total);
    if (index != -1) {
      return index;
    }
    //look for block
    total = total == 2 ? 20 : 2;
    index = this.compTest(total);
    if (index != -1) {
      return index;
    }
    //choose random corner or center
    index = this.chooseRandom([0, 2, 4, 6, 8])
    if (index != -1) {
      return index;
    }
    //choose random sides
    index = this.chooseRandom([1, 3, 5, 7])
    if (index != -1) {
      return index;
    }
  }

  compTest(total: number) {
    for (let i = 0; i < this.wins.length; i++) {
      if (this.cellArray[this.wins[i][0]] + this.cellArray[this.wins[i][1]] + this.cellArray[this.wins[i][2]] == total) {
        if (!this.cellArray[this.wins[i][0]]) {
          return this.wins[i][0];
        }
        if (!this.cellArray[this.wins[i][1]]) {
          return this.wins[i][1];
        }
        if (!this.cellArray[this.wins[i][2]]) {
          return this.wins[i][2];
        }
      }
    }
    return -1;
  }

  chooseRandom(arr: number[]) {
    let index = Math.floor(Math.random() * (5));
    for (let i = 0; i < arr.length; i++) {
      if (this.cellArray[arr[index]] == 0) {
        return arr[index];
      } else {
        if (i == arr.length - 1) {
          return -1;
        }
        arr[index] = -1;
        while (arr[index] == -1)
          index = Math.floor(Math.random() * (5));
      }
    }
  }

  checkWin() {
    this.winIndex = this.wins.findIndex((elem) => {
      return (this.cellArray[elem[0]] &&
        (this.cellArray[elem[0]] === this.cellArray[elem[1]]) &&
        (this.cellArray[elem[1]] === this.cellArray[elem[2]]))
    });
    return this.winIndex;
  }

  highlightWin(index) {
    this.winningCells[this.wins[index][0]] = true;
    this.winningCells[this.wins[index][1]] = true;
    this.winningCells[this.wins[index][2]] = true;
  }

  checkDraw() {
    return this.cellArray.every((elem, index, array) => {
      return elem != 0;
    })
  }

  resetBoard(delay: number) {
    setTimeout(() => {
      this.message = '';
      this.cellArray.fill(0);
      this.winningCells.fill(false);
      this.currentTurn = 'X';
      if (this.vsComp && this.compSymbol == 'X') {
        this.compTurn = true;
        this.compMove();
      }
    }, delay);
  }
}

