import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'fp-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {

  constructor() {}

  subscription: Subscription;
  setWorkTime: number = 600;
  currWorkTime: number = this.setWorkTime;
  setBreakTime: number = 300;
  currBreakTime: number =this.setBreakTime;
  timeRunning: boolean = false;
  isWorkTime: boolean = true;
  tick: number = 0;

  startClock() {
    this.timeRunning = true;
    let timer = Observable.timer(0, 1000);
    this.subscription = timer.subscribe((t) => {
      this.tick++;
      this.currWorkTime = this.setWorkTime - this.tick;
    });
  }

  changeTimer(clock: string, func: string) {
    if (clock == 'work') {
      if (func == 'add') {
        this.setWorkTime += 60;
        return;
      } else if (this.setWorkTime >= 60) {
        this.setWorkTime -= 60;
      }
      return;
    } else {
      if (func == 'add') {
        this.setBreakTime += 60;
        return;
      } else if (this.setBreakTime >= 60) {
        this.setBreakTime -= 60;
      }
      return;
    }
  }

  pauseClock(){
    this.subscription.unsubscribe();
    this.timeRunning = false;
  }


  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

