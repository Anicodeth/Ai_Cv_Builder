import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-website-and-social-links',
  templateUrl: './website-and-social-links.component.html',
  styleUrls: ['./website-and-social-links.component.css']
})
export class WebsiteAndSocialLinksComponent {
  public webAndSocialLinksForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService
  ) {
    this.webAndSocialLinksForm = this.resumeService.getWebAndSocialLinksForm();
  }

  get webAndSocialLinks(): FormArray {
    return this.webAndSocialLinksForm.get('webAndSocialLinks') as FormArray;
  }

  addWebAndSocialLink() {
    this.webAndSocialLinks.push(
      this.fb.group({
        label: [null, Validators.required],
        link: [null, Validators.required],
      })
    );
  }

  removeWebAndSocialLink(index: number) {
    this.webAndSocialLinks.removeAt(index);
  }
}
