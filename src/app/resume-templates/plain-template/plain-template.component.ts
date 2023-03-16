import { Component } from '@angular/core';

@Component({
  selector: 'app-plain-template',
  templateUrl: './plain-template.component.html',
  styleUrls: ['./plain-template.component.css']
})
export class PlainTemplateComponent {
  public personalDetails: any = {
    name: "Fikernew",
    jobTitle: "Fikernew",
    firstName: "Fikernew",
    lastName: "Fikernew",
    email: "Fikernew",
    phone: "Fikernew",
    country: "Fikernew",
    city: "Fikernew",
  };
  public personalSummary: any;
  public experience: any;
  public education: any;
  public links: any;
  public skills: any;
  public languages: any;
  public hobies: any;
  public extraCurricularActivities: any;
  public projects: any;
  public internships: any;
}
