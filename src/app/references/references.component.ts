import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {
  public referencesForm: FormGroup;
  public references: FormArray;
  constructor(
    private resumeService: ResumeService
  ) {
    this.referencesForm = this.resumeService.getReferencesForm();
    this.references = this.referencesForm.get('references') as FormArray;
  }

  addReference() {
    this.resumeService.addReference();
  }

  removeReference(index: number) {
    this.resumeService.removeReference(index);
  }

  resetReferencesForm() {
    this.resumeService.resetReferencesForm();
  }

}
