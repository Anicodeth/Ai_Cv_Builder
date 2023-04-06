import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})

export class ResumeService {
  
  private personalDetailsForm: FormGroup;
  private personalSummaryForm: FormGroup;
  private experiencesForm: FormGroup;
  private educationsForm: FormGroup;

  private webAndSocialLinksForm: FormGroup;
  private skillsForm: FormGroup;
  
  private extraCurricularActivitiesForm: FormGroup;
  private internshipsForm: FormGroup;
  private languagesForm: FormGroup;
  private coursesForm: FormGroup;
  private referencesForm: FormGroup;
  private hobbiesForm: FormGroup;
  private customSectionsForm: FormGroup;

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
    this.hobbiesForm = this.fb.group({
      hobbies: [null, Validators.required],
    });
    this.personalSummaryForm = this.fb.group({
      personalSummary: [null, Validators.required],
    });
    this.referencesForm = this.fb.group({
      references: this.fb.array([])
    });
    this.experiencesForm = this.fb.group({
      experiences: this.fb.array([])
    });
    this.educationsForm = this.fb.group({
      educations: this.fb.array([])
    });
    this.extraCurricularActivitiesForm = this.fb.group({
      extraCurricularActivities: this.fb.array([])
    });
    this.webAndSocialLinksForm = this.fb.group({
      webAndSocialLinks: this.fb.array([])
    });
    this.skillsForm = this.fb.group({
      skills: this.fb.array([])
    });
    this.internshipsForm = this.fb.group({
      internships: this.fb.array([])
    });
    this.coursesForm = this.fb.group({
      courses: this.fb.array([])
    });
    this.languagesForm = this.fb.group({
      languages: this.fb.array([])
    });
    this.customSectionsForm = this.fb.group({
      customSections: this.fb.array([])
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

  getEducationsForm(): FormGroup {
    return this.educationsForm;
  }

  get educations(): FormArray {
    return this.educationsForm.get('educations') as FormArray;
  }

  getExtraCurricularActivitiesForm(): FormGroup {
    return this.extraCurricularActivitiesForm;
  }

  get extraCurricularActivities(): FormArray {
    return this.extraCurricularActivitiesForm.get('extraCurricularActivities') as FormArray;
  }

  getWebAndSocialLinksForm(): FormGroup {
    return this.webAndSocialLinksForm;
  }

  get webAndSocialLinks(): FormArray {
    return this.webAndSocialLinksForm.get('webAndSocialLinks') as FormArray;
  }

  getSkillsForm(): FormGroup {
    return this.skillsForm;
  }

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  getInternshipsForm(): FormGroup {
    return this.internshipsForm;
  }

  get internships(): FormArray {
    return this.internshipsForm.get('internships') as FormArray;
  }

  getLanguagesForm(): FormGroup {
    return this.languagesForm;
  }

  get languages(): FormArray {
    return this.languagesForm.get('languages') as FormArray;
  }

  getCoursesForm(): FormGroup {
    return this.coursesForm;
  }

  get courses(): FormArray {
    return this.coursesForm.get('courses') as FormArray;
  }

  getHobbiesFrom(): FormGroup {
    return this.hobbiesForm;
  }

  get hobbies(): FormControl {
    return this.hobbiesForm.get('hobbies') as FormControl;
  }

  getPersonalSummaryForm(): FormGroup {
    return this.personalSummaryForm;
  }

  get personalSummary(): FormControl {
    return this.personalSummaryForm.get('personalSummary') as FormControl;
  }

  getCustomeSectionsForm(): FormGroup {
    return this.personalSummaryForm;
  }

  get customSections(): FormControl {
    return this.customSectionsForm.get('customSections') as FormControl;
  }

}

