import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CompletenessService } from '../services/completeness.service';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  public experiencesForm: FormGroup | any;
  private EXPERIENCE_VALUE = 5; // we give 5% progress value for experiences.

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService,
    private sessionService: SessionService,
    private completenessService: CompletenessService
  ) {
  }
  
  ngOnInit(): void {
    this.experiencesForm = this.resumeService.getExperiencesForm();
    
    const storedOnSession = this.sessionService.getItem('experiences');
    if (storedOnSession) {
      storedOnSession.forEach((item: any) => {
        this.experiences.push(
          this.fb.group(item)
        )
      this.completenessService.increasePercentageCompleteness(this.EXPERIENCE_VALUE)
      });
    }

    this.experiencesForm.valueChanges.subscribe(() => {
      this.sessionService.setItem('experiences', this.experiences.value);
    });
  }

  get experiences(): FormArray {
    return this.experiencesForm.get('experiences') as FormArray;
  }

  addExperience() {
    this.experiences.push(
      this.fb.group({
        employer: [null, Validators.required],
        jobTitle: [null, Validators.required],
        city: [null, Validators.required],
        description: [null, Validators.required],
        startDate: [null, Validators.required],
        endDate: [null, Validators.required],
      })
    );

    this.completenessService.increasePercentageCompleteness(this.EXPERIENCE_VALUE);
  }

  removeExperience(index: number) {
    this.experiences.removeAt(index);

    this.completenessService.decreasePercentageCompleteness(this.EXPERIENCE_VALUE);
  }
}
