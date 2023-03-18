import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})

export class ResumeService {

  private referencesForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.referencesForm = fb.group({
      name: [null, Validators.required],
      company: [null, Validators.required],
      phone: [null, [Validators.minLength(10), Validators.maxLength(10)]],
      email: [null, Validators.email],
      aisummary :[null]
    
    
    })}

  getReferencesForm() {
    return this.referencesForm;}

}
