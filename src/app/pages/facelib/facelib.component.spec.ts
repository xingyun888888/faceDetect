import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacelibComponent } from './facelib.component';

describe('FacelibComponent', () => {
  let component: FacelibComponent;
  let fixture: ComponentFixture<FacelibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacelibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacelibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
