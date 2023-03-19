import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-extra-curricular-activities',
  templateUrl: './extra-curricular-activities.component.html',
  styleUrls: ['./extra-curricular-activities.component.css']
})
export class ExtraCurricularActivitiesComponent {
  public extraCurricularActivitiesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService
  ) {
    this.extraCurricularActivitiesForm = this.resumeService.getExtraCurricularActivitiesForm();
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
