import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetmonitorComponent } from './netmonitor.component';

describe('NetmonitorComponent', () => {
  let component: NetmonitorComponent;
  let fixture: ComponentFixture<NetmonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetmonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetmonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
