import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  public coursesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService
  ) {
    this.coursesForm = this.resumeService.getCoursesForm();
  }

  get courses(): FormArray {
    return this.coursesForm.get('courses') as FormArray;
  }

  addCourse() {
    this.courses.push(
      this.fb.group({
        course: [null, Validators.required],
        institution: [null, Validators.required],
        startDate: [null, Validators.required],
        endDate: [null, Validators.required],
      })
    );
  }

  removeCourse(index: number) {
    this.courses.removeAt(index);
  }
}
