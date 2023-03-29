import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {
  public internshipsForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService,
    private sessionService: SessionService
  ) {}
  
  ngOnInit(): void {
    this.internshipsForm = this.resumeService.getInternshipsForm();
    
    const storedOnSession = this.sessionService.getItem('internships');
    if (storedOnSession) {
      storedOnSession.forEach((item: any) => {
        this.internships.push(
          this.fb.group(item)
        )
      });
    }

    this.internshipsForm.valueChanges.subscribe(() => {
      this.sessionService.setItem('internships', this.internships.value);
    });
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
