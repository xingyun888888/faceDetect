import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDataAnalyzeComponent } from './report-data-analyze.component';

describe('ReportDataAnalyzeComponent', () => {
  let component: ReportDataAnalyzeComponent;
  let fixture: ComponentFixture<ReportDataAnalyzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDataAnalyzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDataAnalyzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
