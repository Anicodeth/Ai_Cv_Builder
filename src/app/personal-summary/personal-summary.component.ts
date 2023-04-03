import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CompletenessService } from '../services/completeness.service';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-personal-summary',
  templateUrl: './personal-summary.component.html',
  styleUrls: ['./personal-summary.component.css'],
})
export class PersonalSummaryComponent implements OnInit {
  //This will be replaces by the backend received data
  public aiSummary: string[] = [
    '1',
    '2',
    '5',
    'sd',
    'i am an ai called davoincni',
  ];
  public aiChoicesExpand: boolean = false;
  public userChoice!: string;
  public personalSummaryForm: any;
  private PERSONAL_SUMMARY_VALUE = 5; // We give 5% value for personal summary entry
  private value_added: any | boolean;

  constructor(
    private resumeService: ResumeService,
    private sessionService: SessionService,
    private completenessService: CompletenessService
    ) {
  }
  
  ngOnInit(): void {
    this.personalSummaryForm = this.resumeService.getPersonalSummaryForm();
    this.value_added = false;
    
    const storedOnSession = this.sessionService.getItem('personalSummaryForm');
    if (storedOnSession) {
      this.personalSummaryForm.patchValue(storedOnSession);
    }

    this.personalSummaryForm.valueChanges.subscribe(() => {
      this.sessionService.setItem(
        'personalSummaryForm',
        this.personalSummaryForm.value
      );

      this.updateProgess();
    });
  }

  displayAiChoices() {
    this.aiChoicesExpand = !this.aiChoicesExpand;
  }

  updateProgess() {
    if (this.personalSummaryForm.valid) {
      if (!this.value_added) {
        this.completenessService.increasePercentageCompleteness(this.PERSONAL_SUMMARY_VALUE);
        this.value_added = true;
      }
    } else {
      if (this.value_added) {
        this.completenessService.decreasePercentageCompleteness(this.PERSONAL_SUMMARY_VALUE);
        this.value_added = false;
      }
    }
  }
}
