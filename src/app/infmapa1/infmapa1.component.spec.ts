import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infmapa1Component } from './infmapa1.component';

describe('Infmapa1Component', () => {
  let component: Infmapa1Component;
  let fixture: ComponentFixture<Infmapa1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infmapa1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infmapa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
