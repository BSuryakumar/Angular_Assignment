import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanHistoryComponent } from './scan-history.component';

describe('ScanHistoryComponent', () => {
  let component: ScanHistoryComponent;
  let fixture: ComponentFixture<ScanHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
