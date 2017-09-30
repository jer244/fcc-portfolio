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
    this.fillMovesArr();
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
  colors: string[] = [
    'green',
    'red',
    'yellow',
    'blue'
  ]
  sound0 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  sound1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  sound2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  sound3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  buzzer = new Audio('https://dl.dropboxusercontent.com/s/3rsj0vvm1hhjcmj/Wrong-answer-sound-effect.mp3?dl=0');

  startGame() {
    //reset
    this.activeButton = '';
    this.compMove = true;
    this.count = '1';
    this.inputCount = 1;
    this.fillMovesArr();
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
    let color, sound;
    switch (this.moves[this.inputCount]) {
      case 0:
        this.activeButton = 'green';
        sound = this.sound0;
        break;
      case 1:
        this.activeButton = 'red';
        sound = this.sound1;
        break;
      case 2:
        this.activeButton = 'yellow';
        sound = this.sound2;
        break;
      case 3:
        this.activeButton = 'blue';
        sound = this.sound3;
        break;
    }
    sound.play();

    let delay = this.compMove == true ? 800 : 300;

    setTimeout(() => {
      this.activeButton = '';
      if (this.inputCount < Number(this.count)) {
        this.inputCount++;
        if (this.compMove == true) {
          this.wait();
        }
        return;
      } else {
        if (this.compMove == false) {
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
    let flashes = 12;
    function showFlash() {
      setTimeout(() => {
        if (flashes) {
          this.activeButton = this.colors[flashes % 4];
          flashes--;
          showFlash();
        }
        else{
              this.activeButton = '';
              this.compMove = true;
              this.count = '1';
              this.inputCount = 1;
        }
        }, 200);
    }
  }

  } //end SimonComponent Class


