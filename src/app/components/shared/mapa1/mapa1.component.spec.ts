import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mapa1Component } from './mapa1.component';

describe('Mapa1Component', () => {
  let component: Mapa1Component;
  let fixture: ComponentFixture<Mapa1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mapa1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mapa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
