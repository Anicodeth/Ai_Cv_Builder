import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-extra-curricular-activities',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  public certificationsForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService,
    private sessionService: SessionService
  ) {
  }
  
  ngOnInit(): void {
    this.certificationsForm = this.resumeService.getCertificationsForm();
    
    const storedOnSession = this.sessionService.getItem('certifications');
    if (storedOnSession) {
      storedOnSession.forEach((item: any) => {
        this.certifications.push(
          this.fb.group(item)
        )
      });
    }

    this.certificationsForm.valueChanges.subscribe(() => {
      this.sessionService.setItem('certifications', this.certifications.value);
    });
  }

  get certifications(): FormArray {
    return this.certificationsForm.get('certifications') as FormArray;
  }

  addExtraCurricularActivity() {
    this.certifications.push(
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
    this.certifications.removeAt(index);
  }

  capitalize(formControlName: string, index: number) {
    this.resumeService.capitalize(this.certifications.at(index), formControlName);
  }
}
