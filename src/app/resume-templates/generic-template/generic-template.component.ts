import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
import { TemplateService } from 'src/app/services/template.service';
import { ResumeService } from 'src/app/services/resume.service';
import { PdfService } from 'src/app/services/pdf.service';

@Component({
  selector: 'app-generic-template',
  templateUrl: './generic-template.component.html',
  styleUrls: ['./generic-template.component.css']
})
export class GenericTemplateComponent implements OnInit {
  public personalDetails: any;
  public references: any;
  public experiences: any;
  public educations: any;
  public webAndSocialLinks: any;
  public skills: any;
  public range: any;

  public extraCurricularActivities: any;
  public imageData: string | undefined;
  public professionalSummary: FormGroup<any>;

  constructor (
    private resumeService: ResumeService,
    private templateService: TemplateService,
    private imageService: ImageService,
    private pdfService: PdfService
    ) {
      this.personalDetails = this.resumeService.getPersonalDetailsForm();
      this.professionalSummary = this.resumeService.getPersonalSummaryForm();
      this.extraCurricularActivities = this.resumeService.extraCurricularActivities;
      this.references = this.resumeService.references;
      this.experiences = this.resumeService.experiences;
      this.educations = this.resumeService.educations;
      this.webAndSocialLinks = this.resumeService.webAndSocialLinks;
      this.skills = this.resumeService.skills;
      this.range = Array;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toPdf() {
    const dashboard:any = document.getElementById("preview-window");

    this.pdfService.toPdf(dashboard);
  }
ngOnInIt(): void{
  this.imageService.getImageData().subscribe((data) => {
    this.imageData = data;
  });
}

 

}
