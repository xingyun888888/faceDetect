import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamonitorComponent } from './datamonitor.component';

describe('DatamonitorComponent', () => {
  let component: DatamonitorComponent;
  let fixture: ComponentFixture<DatamonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
