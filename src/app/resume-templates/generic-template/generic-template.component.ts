import { Component } from '@angular/core';
import { PdfService } from 'src/app/services/pdf.service';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-generic-template',
  templateUrl: './generic-template.component.html',
  styleUrls: ['./generic-template.component.css']
})
export class GenericTemplateComponent {
  public personalDetails: any;
  public professionalSummary: any;
  public references: any;
  public experiences: any;
  public educations: any;
  public webAndSocialLinks: any;
  public skills: any;
  public range: any;

  constructor (
    private resumeService: ResumeService,
    private pdfService: PdfService
    ) {
      this.personalDetails = this.resumeService.getPersonalDetailsForm();
      this.professionalSummary = this.resumeService.getPersonalSummaryForm();
      this.references = this.resumeService.references;
      this.experiences = this.resumeService.experiences;
      this.educations = this.resumeService.educations;
      this.webAndSocialLinks = this.resumeService.webAndSocialLinks;
      this.skills = this.resumeService.skills;
      this.range = Array;
  }

  toPdf() {
    const dashboard:any = document.getElementById("preview-window");

    this.pdfService.toPdf(dashboard);
  }
}
