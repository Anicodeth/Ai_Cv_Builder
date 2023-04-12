import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeService } from '../services/resume.service';
import { AiService } from '../ai.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-personal-summary',
  templateUrl: './personal-summary.component.html',
  styleUrls: ['./personal-summary.component.css']
})
export class PersonalSummaryComponent implements OnInit {

  //This will be replaces by the backend received data
  public aiSummary: string[] = ["carrs", "pop"];
  public aiChoicesExpand: boolean = false;
  public userChoice!: string;
  public personalSummary: FormGroup | any;
  public textAreaValue: string | undefined;

  constructor(
    private aiService: AiService,
    private resumeService: ResumeService,
    private sessionService: SessionService
  ) {
  }

  ngOnInit(): void {
    this.personalSummary = this.resumeService.getPersonalSummaryForm();

    const storedOnSession = this.sessionService.getItem('personalSummary');
    if (storedOnSession) {
      this.personalSummary.patchValue(storedOnSession);
    }

    this.personalSummary.valueChanges.subscribe(() => {
      this.sessionService.setItem('personalSummary', this.personalSummary.value);
    });    
  }

  displayAiChoices() {
    this.aiSummary = this.aiService.paragraphs;
    this.aiChoicesExpand = !this.aiChoicesExpand;
  }

  bindPersonalSummary() {
    this.textAreaValue = this.userChoice;
  }



}
