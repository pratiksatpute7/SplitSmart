import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSummaryComponent } from './people-summary.component';

describe('PeopleSummaryComponent', () => {
  let component: PeopleSummaryComponent;
  let fixture: ComponentFixture<PeopleSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeopleSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
