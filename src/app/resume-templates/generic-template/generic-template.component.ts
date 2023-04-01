import { Component } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';
import  jsPDF  from 'jspdf';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-generic-template',
  templateUrl: './generic-template.component.html',
  styleUrls: ['./generic-template.component.css']
})
export class GenericTemplateComponent {
  public personalDetails: any;
  public references: any;
  public experiences: any;
  public educations: any;
  public webAndSocialLinks: any;
  public skills: any;
  public range: any;

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
      this.range = Array;
  }

  toPdf() {
    const dashboard:any = document.getElementById("preview-window");
  
    const dashboardHeight = dashboard.clientHeight;
    const dashboardWidth = dashboard.clientWidth;
    const options = { background: 'white', width: dashboardWidth, height: dashboardHeight };
  
    domtoimage.toPng(dashboard, options).then((imgData: any) => {
         const doc = new jsPDF(dashboardWidth > dashboardHeight ? 'l' : 'p', 'mm', [dashboardWidth, dashboardHeight]);
         const imgProps = doc.getImageProperties(imgData);
         const pdfWidth = doc.internal.pageSize.getWidth();
         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
         doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
         doc.save('preview.pdf');
    });
  }
}
