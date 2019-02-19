import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comop1Component } from './comop1.component';

describe('Comop1Component', () => {
  let component: Comop1Component;
  let fixture: ComponentFixture<Comop1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comop1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comop1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
