import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacelibModelComponent } from './facelib-model.component';

describe('FacelibModelComponent', () => {
  let component: FacelibModelComponent;
  let fixture: ComponentFixture<FacelibModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacelibModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacelibModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
