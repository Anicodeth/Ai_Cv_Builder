import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  public languagesForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService
  ) {
    this.languagesForm = this.resumeService.getLanguagesForm();
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
