import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent {
  public referenceForm: any;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.referenceForm = this.fb.group({
      name: [null, Validators.required],
      company: [null, Validators.required],
      phone: [null, Validators.minLength(10)],
      email: [null, Validators.required,],
    });
  }
  
  onSubmit() {
    console.log('Reference Form Value', this.referenceForm.value);
  }

}
