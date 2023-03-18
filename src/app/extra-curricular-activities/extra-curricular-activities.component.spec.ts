import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCurricularActivitiesComponent } from './extra-curricular-activities.component';

describe('ExtraCurricularActivitiesComponent', () => {
  let component: ExtraCurricularActivitiesComponent;
  let fixture: ComponentFixture<ExtraCurricularActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraCurricularActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraCurricularActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
