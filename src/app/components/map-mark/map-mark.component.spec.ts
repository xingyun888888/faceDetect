import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMarkComponent } from './map-mark.component';

describe('MapMarkComponent', () => {
  let component: MapMarkComponent;
  let fixture: ComponentFixture<MapMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
