import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalSummaryComponent } from './personal-summary.component';

describe('PersonalSummaryComponent', () => {
  let component: PersonalSummaryComponent;
  let fixture: ComponentFixture<PersonalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
