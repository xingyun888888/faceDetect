import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyModelComponent } from './strategy-model.component';

describe('StrategyModelComponent', () => {
  let component: StrategyModelComponent;
  let fixture: ComponentFixture<StrategyModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
