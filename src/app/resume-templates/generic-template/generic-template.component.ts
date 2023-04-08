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
  public personalDetails: any | FormGroup;
  public professionalSummary: any | FormGroup;
  public experiences: any | FormGroup;
  public educations: any | FormGroup;

  public webAndSocialLinks: any | FormGroup;
  public skills: any | FormGroup;

  public extraCurricularActivities: any | FormGroup;
  public references: any | FormGroup;
  public languages: any | FormGroup;
  public hobbies: any | FormGroup;
  public internships: any | FormGroup;
  public courses: any | FormGroup;

  public imageData: string | undefined;

  constructor (
    private resumeService: ResumeService,
    private templateService: TemplateService,
    private imageService: ImageService,
    private pdfService: PdfService
    ) {
      this.personalDetails = this.resumeService.getPersonalDetailsForm();
      this.professionalSummary = this.resumeService.getPersonalSummaryForm();
      this.experiences = this.resumeService.experiences;
      this.educations = this.resumeService.educations;

      this.webAndSocialLinks = this.resumeService.webAndSocialLinks;
      this.skills = this.resumeService.skills;

      this.extraCurricularActivities = this.resumeService.extraCurricularActivities;
      this.references = this.resumeService.references;
      this.languages = this.resumeService.languages;
      this.hobbies = this.resumeService.hobbies;
      this.internships = this.resumeService.internships;
      this.courses = this.resumeService.courses;
  }

  ngOnInit(): void {
    this.imageService.getImageData().subscribe((data) => {
      this.imageData = data;
    });
  }

  toPdf() {
    const dashboard:any = document.getElementById("preview-window");

    this.pdfService.toPdf(dashboard);
  }
}
