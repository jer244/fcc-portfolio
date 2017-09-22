import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'fp-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {

  constructor() { }

  tick: number;
  subscription: Subscription;
  startTime: number = 600;
  breakTime: number = 300;

  startClock(){
    let timer = TimerObservable.create(1, 1000);
    this.subscription = timer.subscribe((t) => {this.startTime = this.startTime-t});
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
