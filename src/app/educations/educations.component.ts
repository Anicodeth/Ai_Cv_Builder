import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-education',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.css']
})
export class EducationsComponent implements OnInit {
  public educationsForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService,
    private sessionService: SessionService
  ) {
  }
  
  ngOnInit(): void {
    this.educationsForm = this.resumeService.getEducationsForm();
    
    const storedOnSession = this.sessionService.getItem('educations');
    if (storedOnSession) {
      storedOnSession.forEach((item: any) => {
        this.educations.push(
          this.fb.group(item)
        )
      });
    }

    this.educationsForm.valueChanges.subscribe(() => {
      this.sessionService.setItem('educations', this.educations.value);
    });
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
