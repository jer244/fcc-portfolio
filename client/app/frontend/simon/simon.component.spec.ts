/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SimonComponent } from './simon.component';

describe('SimonComponent', () => {
  let component: SimonComponent;
  let fixture: ComponentFixture<SimonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
