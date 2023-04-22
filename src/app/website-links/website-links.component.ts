import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-website-links',
  templateUrl: './website-links.component.html',
  styleUrls: ['./website-links.component.css']
})
export class WebsiteLinksComponent {
  public linkForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService
  ) {
    this.linkForm = this.resumeService.getlinkForm();
  }

  get links(): FormArray {
    return this.linkForm.get('webAndSocialLinks') as FormArray;
  }

  addlink() {
    this.links.push(
      this.fb.group({
        label: [null, Validators.required],
        link: [null, Validators.required],
      })
    );
  }

  removelink(index: number) {
    this.links.removeAt(index);
  }
}
