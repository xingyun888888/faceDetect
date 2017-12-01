import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gaochao1Component } from './gaochao1.component';

describe('Gaochao1Component', () => {
  let component: Gaochao1Component;
  let fixture: ComponentFixture<Gaochao1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gaochao1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gaochao1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
