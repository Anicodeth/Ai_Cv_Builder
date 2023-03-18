import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-plain-template',
  templateUrl: './plain-template.component.html',
  styleUrls: ['./plain-template.component.css']
})
export class PlainTemplateComponent implements OnInit, OnChanges {
  public personalDetailsForm: any;
  public referencesForm: any;
  public references: any;

  constructor (
    private resumeService: ResumeService,
    ) {
      this.personalDetailsForm = this.resumeService.getPersonalDetailsForm();
      this.referencesForm = this.resumeService.getReferencesForm();
      this.references = this.resumeService.references;
  }

  ngOnInit() {
    console.log(this.referencesForm.get('references'));
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.referencesForm = this.resumeService.getReferencesForm();
    this.references = this.resumeService.references;

    for (let i = 0; i < this.references.length; i++) {
      console.log(this.references[i]);
    }
  }
}
