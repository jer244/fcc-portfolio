/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TributeComponent } from './tribute.component';

describe('TributeComponent', () => {
  let component: TributeComponent;
  let fixture: ComponentFixture<TributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
