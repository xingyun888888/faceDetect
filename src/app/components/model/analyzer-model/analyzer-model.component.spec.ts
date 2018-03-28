import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerModelComponent } from './analyzer-model.component';

describe('AnalyzerModelComponent', () => {
  let component: AnalyzerModelComponent;
  let fixture: ComponentFixture<AnalyzerModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzerModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
