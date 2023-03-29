import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-extra-curricular-activities',
  templateUrl: './extra-curricular-activities.component.html',
  styleUrls: ['./extra-curricular-activities.component.css']
})
export class ExtraCurricularActivitiesComponent implements OnInit {
  public extraCurricularActivitiesForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService,
    private sessionService: SessionService
  ) {
  }
  
  ngOnInit(): void {
    this.extraCurricularActivitiesForm = this.resumeService.getExtraCurricularActivitiesForm();
    
    const storedOnSession = this.sessionService.getItem('extraCurricularActivities');
    if (storedOnSession) {
      storedOnSession.forEach((item: any) => {
        this.extraCurricularActivities.push(
          this.fb.group(item)
        )
      });
    }

    this.extraCurricularActivitiesForm.valueChanges.subscribe(() => {
      this.sessionService.setItem('extraCurricularActivities', this.extraCurricularActivities.value);
    });
  }

  get extraCurricularActivities(): FormArray {
    return this.extraCurricularActivitiesForm.get('extraCurricularActivities') as FormArray;
  }

  addExtraCurricularActivity() {
    this.extraCurricularActivities.push(
      this.fb.group({
        employer: [null, Validators.required],
        function: [null, Validators.required],
        city: [null, Validators.required],
        description: [null, Validators.required],
        startDate: [null, Validators.required],
        endDate: [null, Validators.required],
      })
    );
  }

  removeExtraCurricularActivity(index: number) {
    this.extraCurricularActivities.removeAt(index);
  }
}
