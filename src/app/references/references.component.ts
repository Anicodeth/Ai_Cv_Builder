import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {
  public referencesForm: FormGroup;
  constructor(
    private resumeService: ResumeService
  ) {
    this.referencesForm = this.resumeService.getReferencesForm();
  }

}
