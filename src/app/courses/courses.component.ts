import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public coursesForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.coursesForm = this.resumeService.getCoursesForm();
    
    const storedOnSession = this.sessionService.getItem('courses');
    if (storedOnSession) {
      storedOnSession.forEach((item: any) => {
        this.courses.push(
          this.fb.group(item)
        )
      });
    }

    this.coursesForm.valueChanges.subscribe(() => {
      this.sessionService.setItem('courses', this.courses.value);
    });
  }

  get courses(): FormArray {
    return this.coursesForm.get('courses') as FormArray;
  }

  addCourse() {
    this.courses.push(
      this.fb.group({
        title: [null, Validators.required],
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
