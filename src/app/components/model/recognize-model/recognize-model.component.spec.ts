import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecognizeModelComponent } from './recognize-model.component';

describe('RecognizeModelComponent', () => {
  let component: RecognizeModelComponent;
  let fixture: ComponentFixture<RecognizeModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecognizeModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecognizeModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
