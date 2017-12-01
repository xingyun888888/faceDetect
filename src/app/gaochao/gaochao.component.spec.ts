import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaochaoComponent } from './gaochao.component';

describe('GaochaoComponent', () => {
  let component: GaochaoComponent;
  let fixture: ComponentFixture<GaochaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaochaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaochaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
