import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  public educationsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService
  ) {
    this.educationsForm = this.resumeService.getEducationsForm();
  }

  get educations(): FormArray {
    return this.educationsForm.get('educations') as FormArray;
  }

  addEducation() {
    this.educations.push(
      this.fb.group({
        school: [null, Validators.required],
        degree: [null, Validators.required],
        city: [null, Validators.required],
        description: [null, Validators.required],
        startDate: [null, Validators.required],
        endDate: [null, Validators.required],
      })
    );
  }

  removeEducation(index: number) {
    this.educations.removeAt(index);
  }
}
