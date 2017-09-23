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
    this.showPattern();
  }

  strict: boolean = false;
  compMove: boolean = true;
  moves: number [] = [];
  count: string = '20';
  inputCount: number = 0;
  activeButton: string = '';
  colors: string [] = [
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



  startGame(){
    //reset
    this.activeButton = '';
    this.compMove = true;
    this.count = '0';
    this.inputCount = 0;
    this.fillMovesArr();
  }

  showPattern(){
    this.displayColor();
  }

  displayColor(){
    let color, sound;
    switch(this.moves[this.inputCount]){
      case 0:
        color = 'green';
        sound = this.sound0;
        break;
      case 1:
        color = 'red';
        sound = this.sound1;
        break;
      case 2:
        color = 'yellow';
        sound = this.sound2;
        break;
      case 3:
        color = 'blue';
        sound = this.sound3;
        break;
    }
    this.activeButton = color;
    sound.play();

    setTimeout(() => {
      this.activeButton = '';
      if(this.inputCount < Number(this.count)-1) {
        this.inputCount++;
        this.wait();
      }else{
        this.inputCount = 0;
        this.compMove = false;
      }
    }, 800);
  }

  wait() {
    setTimeout(() => {
      this.displayColor()
    }, 400);
  }

  fillMovesArr(){
    this.moves = [];
    for(let i = 0; i < 20; i++){
      this.moves.push(Math.floor(Math.random()*4))
    }
    console.log(this.moves);
  }

  toggleStrict(){
    this.strict = !this.strict;
    this.count=String(Number(this.count)+1)
  }

}
