import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {
  public referencesForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService
  ) {
    this.referencesForm = this.resumeService.getReferencesForm();
  }

  get references(): FormArray {
    return this.referencesForm.get('references') as FormArray;
  }

  addReference() {
    this.references.push(
      this.fb.group({
        name: [null, Validators.required],
        company: [null, Validators.required],
        phone: [null, Validators.required],
        email: [null, Validators.required],
      })
    );

  }

  removeReference(index: number) {
    this.references.removeAt(index);
  }

}
