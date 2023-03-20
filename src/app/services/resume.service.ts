import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})

export class ResumeService {

  private referencesForm: FormGroup;
  private experiencesForm: FormGroup;
  private extraCurricularActivitiesForm: FormGroup;
  private personalDetailsForm: FormGroup;
  private linkForm: FormGroup;
  // private aiSummaryForm: FormControl;

  constructor(
    private fb: FormBuilder
  ) {
    this.personalDetailsForm = this.fb.group({
      jobTitle: [null, Validators.required],
      photo: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      country: [null, Validators.required],
      city: [null, Validators.required],
      address: [null, Validators.required],
      postalCode: [null, Validators.required],
      nationality: [null, Validators.required],
      pob: [null, Validators.required],
      dob: [null, Validators.required],
    });

    this.referencesForm = this.fb.group({
      references: this.fb.array([])
    });
    this.experiencesForm = this.fb.group({
      experiences: this.fb.array([])
    });
    this.linkForm = this.fb.group({
      links: this.fb.array([])
    });
    this.extraCurricularActivitiesForm = this.fb.group({
      extraCurricularActivities: this.fb.array([])
    });
  }

  getPersonalDetailsForm(): FormGroup {
    return this.personalDetailsForm;
  }

  getReferencesForm(): FormGroup {
    return this.referencesForm;
  }

  get references(): FormArray {
    return this.referencesForm.get('references') as FormArray;
  }

  getExperiencesForm(): FormGroup {
    return this.experiencesForm;
  }

  get experiences(): FormArray {
    return this.experiencesForm.get('experiences') as FormArray;
  }

  getlinkForm(): FormGroup {
    return this.linkForm;
  }

  get links(): FormArray {
    return this.linkForm.get('links') as FormArray;
  }
  getExtraCurricularActivitiesForm(): FormGroup {
    return this.extraCurricularActivitiesForm;
  }

  get extraCurricularActivities(): FormArray {
    return this.extraCurricularActivitiesForm.get('extraCurricularActivities') as FormArray;
  }

}
