import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-custom-section',
  templateUrl: './custom-section.component.html',
  styleUrls: ['./custom-section.component.css']
})
export class CustomSectionComponent {
  public custom: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService,
    private sessionService: SessionService
  ) {}
  
  ngOnInit(): void {
    this.custom = this.resumeService.getCustomeSectionsForm();

    const storedOnSession = this.sessionService.getItem('Custom');
    if (storedOnSession) {
      this.custom.patchValue(storedOnSession);
    }

    this.custom.valueChanges.subscribe(() => {
      this.sessionService.setItem('Custom', this.custom.value);
    });    
  }
}
