import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraModelComponent } from './camera-model.component';

describe('CameraModelComponent', () => {
  let component: CameraModelComponent;
  let fixture: ComponentFixture<CameraModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
