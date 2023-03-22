import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent {
  public internshipsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService
  ) {
    this.internshipsForm = this.resumeService.getInternshipsForm();
  }

  get internships(): FormArray {
    return this.internshipsForm.get('internships') as FormArray;
  }

  addExperience() {
    this.internships.push(
      this.fb.group({
        employer: [null, Validators.required],
        jobTitle: [null, Validators.required],
        city: [null, Validators.required],
        description: [null, Validators.required],
        startDate: [null, Validators.required],
        endDate: [null, Validators.required],
      })
    );
  }

  removeExperience(index: number) {
    this.internships.removeAt(index);
  }
}
