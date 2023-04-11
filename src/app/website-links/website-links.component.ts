import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { CompletenessService } from '../services/completeness.service';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-website-links',
  templateUrl: './website-links.component.html',
  styleUrls: ['./website-links.component.css']
})
export class WebsiteLinksComponent implements OnInit {
  public linksForm: any;
  private WEIGHTOFLINK = 2;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService,
    private sessionService: SessionService,
    private completenessService: CompletenessService
  ) {
  }

  ngOnInit() {
    this.linksForm = this.resumeService.getWebAndSocialLinksForm();

    const storedOnSession = this.sessionService.getItem('links');
    if (storedOnSession) {
      storedOnSession.forEach((item: any) => {
        this.links.push(
          this.fb.group(item)
        );
        this.increasePercentage();
      });
    }

    this.linksForm.valueChanges.subscribe(() => {
      this.sessionService.setItem('links', this.links.value);
    });
  }

  get links(): FormArray {
    return this.linksForm.get('webAndSocialLinks') as FormArray;
  }

  addLink(): void {
    this.links.push(
      this.fb.group({
        linkLabel: [null, Validators.required],
        linkAddress: [null, Validators.required],
      })
    ); 
    this.increasePercentage();
  }

  removeLink(index: number): void {
    this.links.removeAt(index);
    this.decreasePercentage();
  }
  
  increasePercentage(): void {
    if (this.links.length <= 5) {
      this.completenessService.increasePercentageCompleteness(this.WEIGHTOFLINK);
      console.log(this.completenessService.getPercentageCompleteness());
    }
  }
  
  decreasePercentage(): void {
    if (this.links.length < 5) {
      this.completenessService.decreasePercentageCompleteness(this.WEIGHTOFLINK);
      console.log(this.completenessService.getPercentageCompleteness());
    }
  }
}
