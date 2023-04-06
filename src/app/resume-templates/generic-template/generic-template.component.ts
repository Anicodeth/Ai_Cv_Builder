import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
import { PdfService } from 'src/app/services/pdf.service';
import { ResumeService } from 'src/app/services/resume.service';
import html2pdf from 'html2pdf.js';

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
    private pdfService: PdfService,
    private imageService: ImageService
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
    const options = {
      margin: [0, 0],
      filename: 'my-document.pdf',
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { scale: 4, dpi: 300, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'avoid-all', after: '.page-break' },
    };

    const htmlContent = document.getElementById('preview-window');

    // Get the height of the HTML content
    const htmlHeight: any = htmlContent?.offsetHeight;

    // Calculate the height of an A4 page in pixels
    const a4Width = 8.27 * 72; // A4 width in pixels
    const a4Height = 11.69 * 72; // A4 height in pixels

    // Calculate the number of A4 pages needed to display the content
    const numPages = Math.ceil(htmlHeight / a4Height);

    // Log the number of pages needed to the console
    console.log(`HTML content requires ${numPages} A4 pages to display`);

    // Convert the HTML content to PDF using html2pdf
    html2pdf().from(htmlContent).set(options).outputPdf().then((pdf: any) => {
      // Do something with the PDF
    });

    html2pdf().set(options).from(htmlContent).save();

    // html2pdf()
    //   .from(this.html)
    //   .set(options)
    //   .outputPdf()
    //   .then((pdf: any) => {
    //     // Do something with the PDF file, e.g. save it to disk or display it in the browser
    //     const blob = new Blob([pdf], { type: 'application/pdf' });
    //     const url = URL.createObjectURL(blob);
    //     window.open(url);
    //   })
    //   .catch((error: any) => {
    //     console.error(error);
    //   });
  }

  // toPdf() {
  //   const dashboard:any = document.getElementById("preview-window");

  //   this.pdfService.toPdf(dashboard);
  // }
}
