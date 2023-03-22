import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-plain-template',
  templateUrl: './plain-template.component.html',
  styleUrls: ['./plain-template.component.css']
})
export class PlainTemplateComponent implements OnInit, OnChanges {
  public personalDetails: any;
  public references: any;
  public experiences: any;
  public educations: any;
  public webAndSocialLinks: any;
  public skills: any;

  constructor (
    private resumeService: ResumeService,
    ) {
      this.personalDetails = this.resumeService.getPersonalDetailsForm();
      console.log(this.personalDetails);
      this.references = this.resumeService.references;
      this.experiences = this.resumeService.experiences;
      this.educations = this.resumeService.educations;
      this.webAndSocialLinks = this.resumeService.webAndSocialLinks;
      this.skills = this.resumeService.skills;
  }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // this.referencesForm = this.resumeService.getReferencesForm();
    this.references = this.resumeService.references;
    console.log(this.personalDetails);
  }
}
