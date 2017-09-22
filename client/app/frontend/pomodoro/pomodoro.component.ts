import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'fp-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {

  constructor() { }

  subscription: Subscription;
  workTime: number = 600;
  currWorkTime: number = this.workTime;
  breakTime: number = 300;

  startClock(){
    let timer = Observable.timer(0, 1000);
    this.subscription = timer.subscribe((t) => { 
      this.currWorkTime = this.workTime - t;
    });
  }

  changeTimer(clock: string, func: string) {
    if (clock == 'start') {
      if (func == 'add') {
        this.workTime += 60;
        return;
      } else if(this.workTime >= 60) {
        this.workTime -= 60;
      }
      return;
    } else {
      if (func == 'add') {
        this.breakTime += 60;
        return;
      } else if(this.breakTime >= 60) {
        this.workTime -= 60;
      }
      return;
    }
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
