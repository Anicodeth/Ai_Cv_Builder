import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeService } from '../services/resume.service';
import { AiService } from '../ai.service';

@Component({
  selector: 'app-personal-summary',
  templateUrl: './personal-summary.component.html',
  styleUrls: ['./personal-summary.component.css']
})
export class PersonalSummaryComponent {

     //This will be replaces by the backend received data
     public aiSummary:string[] =  ["carrs", "pop"];
     public aiChoicesExpand:boolean = false;
     public userChoice!: string;
     public personalSummary: FormGroup;
     public textAreaValue:string | undefined;

    constructor(private aiService: AiService,
      private resumeService: ResumeService
      ){
        this.personalSummary = this.resumeService.getPersonalSummaryForm();
        
      }

     displayAiChoices (){
      this.aiSummary = this.aiService.paragraphs;
      this.aiChoicesExpand = !this.aiChoicesExpand;
     }

     bindPersonalSummary(){
       this.textAreaValue = this.userChoice;
     }

  

}
