import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedioComponent } from './vedio.component';

describe('VedioComponent', () => {
  let component: VedioComponent;
  let fixture: ComponentFixture<VedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
