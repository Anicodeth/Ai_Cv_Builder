import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-personal-summary',
  templateUrl: './personal-summary.component.html',
  styleUrls: ['./personal-summary.component.css']
})
export class PersonalSummaryComponent {

     //This will be replaces by the backend received data
     public aiSummary:string[] = ["1","2","5","sd", "i am an ai called davoincni"];
     public aiChoicesExpand:boolean = false;
     public userChoice!: string;



     displayAiChoices (){
      this.aiChoicesExpand = !this.aiChoicesExpand;
     }

  

}
