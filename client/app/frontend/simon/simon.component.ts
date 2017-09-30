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
    this.sound0.load();
    this.sound1.load();
    this.sound2.load();
    this.sound3.load();
  }

  strict: boolean = false;
  compMove: boolean = true;
  moves: number[] = []; //[0] is a dummy placeholder; game will be played using [1]-[20]
  count: string = '1';
  inputCount: number = 1;
  activeButton: string = '';
  winningNumber: number = 3;
  flashes: number = 12;   //number of flashes in winning game display

  sound0 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  sound1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  sound2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  sound3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  buzzer = new Audio('https://dl.dropboxusercontent.com/s/3rsj0vvm1hhjcmj/Wrong-answer-sound-effect.mp3?dl=0');

  colors: string[] = [
    'green',
    'red',
    'yellow',
    'blue'
  ]
  startGame() {
    //reset board
    this.activeButton = '';
    this.compMove = true;
    this.count = '1';
    this.inputCount = 1;
    this.flashes = 12;
    this.fillMovesArr();
    //start game
    this.showPattern();
  }

  fillMovesArr() {
    this.moves = [];
    for (let i = 0; i < 21; i++) {
      this.moves.push(Math.floor(Math.random() * 4))
    }
    console.log(this.moves);
  }

  toggleStrict() {
    this.strict = !this.strict;
  }

  showPattern() {
    this.displayColor();
  }

  userMove(input: number) {
    if (input == this.moves[this.inputCount]) {
      this.displayColor();
      console.log('correct moove');
    }
  }

  displayColor() {
    //activate sound and color
    let sound;
    switch (this.moves[this.inputCount]) {
      case 0:
        sound = this.sound0;
        break;
      case 1:
        sound = this.sound1;
        break;
      case 2:
        sound = this.sound2;
        break;
      case 3:
        sound = this.sound3;
        break;
    }
    sound.play();
    this.activeButton = this.colors[this.moves[this.inputCount]];

    //set delay depending on user and inactivate color after delay
    let delay = this.compMove == true ? 800 : 300;

    setTimeout(() => {
      this.activeButton = '';
      //if not the last move, increment inputCount and continue
      if (this.inputCount < Number(this.count)) {
        this.inputCount++;
        if (this.compMove == true) {
          this.wait();
        }
        return;
      }
      //if last move either show win (if end of game) or change user and continue
      else {
        //check for win
        if (this.compMove == false && Number(this.count) == this.winningNumber) {
          this.showWin();
          return;
        }
        this.inputCount = 1;
        this.compMove = !this.compMove;
        setTimeout(() => {
          if (this.compMove) {
            this.count = String(Number(this.count) + 1);
            this.inputCount = 1;
            this.showPattern();
          }
        }, 400);
      }
    }, delay);
  }

  wait() {
    setTimeout(() => {
      this.displayColor()
    }, 400);
  }

  showWin() {
    setTimeout(() => {
      if (this.flashes) {
        this.activeButton = this.colors[this.flashes % 4];
        this.flashes--;
        this.showWin();
      }
      else {
        this.activeButton = '';
        this.compMove = true;
        this.count = '1';
        this.inputCount = 1;
      }
    }, 200);
  }
} //end SimonComponent Class


