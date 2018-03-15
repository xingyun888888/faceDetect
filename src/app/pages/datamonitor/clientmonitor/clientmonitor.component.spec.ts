import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmonitorComponent } from './clientmonitor.component';

describe('ClientmonitorComponent', () => {
  let component: ClientmonitorComponent;
  let fixture: ComponentFixture<ClientmonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientmonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
