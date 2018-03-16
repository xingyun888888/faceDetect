import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapmonitorComponent } from './mapmonitor.component';

describe('MapmonitorComponent', () => {
  let component: MapmonitorComponent;
  let fixture: ComponentFixture<MapmonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapmonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapmonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
