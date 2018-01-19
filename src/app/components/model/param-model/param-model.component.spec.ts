import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamModelComponent } from './param-model.component';

describe('ParamModelComponent', () => {
  let component: ParamModelComponent;
  let fixture: ComponentFixture<ParamModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
