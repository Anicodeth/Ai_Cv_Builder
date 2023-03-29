import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  public languagesForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService,
    private sessionService: SessionService
  ) {}
  
  ngOnInit(): void {
    this.languagesForm = this.resumeService.getLanguagesForm();
    
    const storedOnSession = this.sessionService.getItem('languages');
    if (storedOnSession) {
      storedOnSession.forEach((item: any) => {
        this.languages.push(
          this.fb.group(item)
        )
      });
    }

    this.languagesForm.valueChanges.subscribe(() => {
      this.sessionService.setItem('languages', this.languages.value);
    });
  }

  get languages(): FormArray {
    return this.languagesForm.get('languages') as FormArray;
  }

  addLanguage() {
    this.languages.push(
      this.fb.group({
        languageName: [null, Validators.required],
        proficiency: [null, Validators.required],
      })
    );
  }

  removeLanguage(index: number) {
    this.languages.removeAt(index);
  }
}
