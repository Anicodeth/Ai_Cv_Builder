import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
import { TemplateService } from 'src/app/services/template.service';
import { ResumeService } from 'src/app/services/resume.service';
import { PdfService } from 'src/app/services/pdf.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-modern-template',
  templateUrl: './modern-template.component.html',
  styleUrls: ['./modern-template.component.css']
})
export class ModernTemplateComponent implements OnInit{
 
  public personalDetails: FormGroup;
  public professionalSummary: FormGroup;
  public references: FormArray;
  public experiences: FormArray;
  public educations: FormArray;
  public webAndSocialLinks: FormArray;
  public skills: FormArray;

  public extraCurricularActivities: FormArray;
  public imageData: string | undefined;

  constructor(
    private resumeService: ResumeService,
    private templateService: TemplateService,
    private imageService: ImageService,
    private pdfService: PdfService
  ) {
    this.personalDetails = this.resumeService.getPersonalDetailsForm();
    this.professionalSummary = this.resumeService.getPersonalSummaryForm();
    this.extraCurricularActivities =
      this.resumeService.extraCurricularActivities;
    this.references = this.resumeService.references;
    this.experiences = this.resumeService.experiences;
    this.educations = this.resumeService.educations;
    this.webAndSocialLinks = this.resumeService.webAndSocialLinks;
    this.skills = this.resumeService.skills;
  }

  toPdf() {
    const resumeContent: any = document.getElementById('preview-window');

    this.pdfService.toPdf(resumeContent);
  }

  ngOnInit(): void {
    this.imageService.getImageData().subscribe((data) => {
      this.imageData = data;
    });
  }
}


