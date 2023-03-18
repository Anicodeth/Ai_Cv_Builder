import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private referencesForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.referencesForm = fb.group({
      references: this.fb.array([{
        name: [null, Validators.required],
        company: [null, Validators.required],
        phone: [null, [Validators.minLength(10), Validators.maxLength(10)]],
        email: [null, Validators.email],
      }]),
    });
  }

  get references(): FormArray {
    return this.referencesForm.get('references') as FormArray;
  }

  addReference() {
    this.references.push({
      name: [null, Validators.required],
      company: [null, Validators.required],
      phone: [null, [Validators.minLength(10), Validators.maxLength(10)]],
      email: [null, Validators.email],
    });
  }

  removeReference(index: number) {
    this.references.removeAt(index);
  }

  resetReferencesForm() {
    this.referencesForm.reset();
  }

  getReferencesForm() {
    return this.referencesForm;
  }
}
