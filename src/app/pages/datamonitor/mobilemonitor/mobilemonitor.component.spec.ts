import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilemonitorComponent } from './mobilemonitor.component';

describe('MobilemonitorComponent', () => {
  let component: MobilemonitorComponent;
  let fixture: ComponentFixture<MobilemonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilemonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilemonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
