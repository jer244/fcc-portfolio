import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'fp-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent {

  constructor() {}

  subscription: Subscription;
  setWorkTime: number = 600;
  currWorkTime: number = 600;
  setBreakTime: number = 300;
  currBreakTime: number = 300;
  timeRunning: boolean = false;
  isWorkTime: boolean = true;
  tick: number = 0;

  startClock() {
    this.timeRunning = true;
    let timer = Observable.timer(0, 100);
    if (this.isWorkTime) {
      this.subscription = timer.subscribe((t) => {
        this.tick++;
        this.currWorkTime = this.setWorkTime - this.tick;
        if (this.currWorkTime == 0) {
          this.pauseClock(true);
        }
      });
    } else {
      this.subscription = timer.subscribe((t) => {
          this.tick++;
          this.currBreakTime = this.setBreakTime - this.tick;
        if (this.currBreakTime == 0) {
          this.pauseClock(true);
        } 
        })
      }
    }

    changeSetTimes(clock: string, func: string) {
      if(this.timeRunning){
        this.pauseClock(false);
      }
      if (clock == 'work') {
        if (func == 'add') {
          this.setWorkTime += 60;
        } else if (this.setWorkTime > 60) {
          this.setWorkTime -= 60;
        }
        this.tick = 0;
        this.currWorkTime = this.setWorkTime;
        return;
      } else {
        if (func == 'add') {
          this.setBreakTime += 60;
        } else if (this.setBreakTime > 60) {
          this.setBreakTime -= 60;
        }
        this.tick = 0;
        this.currBreakTime = this.setBreakTime;
        return;
      }
    }

    pauseClock(restart: boolean) {
      this.subscription.unsubscribe();
      this.timeRunning = false;
      if (restart) {
        this.isWorkTime = !this.isWorkTime;
        this.tick = 0;
        this.timeRunning = true;
        this.startClock();
      }
    }

    reset(){
      this.pauseClock(false);
      this.setWorkTime = 600;
      this.currWorkTime = 600;
      this.setBreakTime = 300;
      this.currBreakTime = 300;
      this.timeRunning = false;
      this.isWorkTime = true;
      this.tick = 0;      
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  }

