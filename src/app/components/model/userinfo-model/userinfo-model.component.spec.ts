import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoModelComponent } from './userinfo-model.component';

describe('UserinfoModelComponent', () => {
  let component: UserinfoModelComponent;
  let fixture: ComponentFixture<UserinfoModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinfoModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
