import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AiService } from '../ai.service';
import { CompletenessService } from '../services/completeness.service';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css'],
})
export class PersonaldetailsComponent implements OnInit, OnChanges {
  public personalDetailsForm: FormGroup | any;
  public expand: boolean = false;
  private currProgress: number = 0;
  private DETAIL_PROGRESS_VALUE = 2;
  private reader: FileReader = new FileReader();


  constructor(
    private resumeService: ResumeService,
    private sessionService: SessionService,
    private completenessService: CompletenessService,
    private aiService: AiService
  ) { }

  expandPersonal() {
    this.expand = !this.expand;
  }
//Ai request
  requestData(){
   const value = this.personalDetailsForm.get('jobTitle').value;
   this.aiService.sendRequest(value);
  }

  ngOnInit(): void {
    this.personalDetailsForm = this.resumeService.getPersonalDetailsForm();

    const storedOnSession = this.sessionService.getItem('personalDetails');
    if (storedOnSession) {
      this.personalDetailsForm.patchValue(storedOnSession);
      this.updateProgress();
    }

    this.personalDetailsForm.valueChanges.subscribe(() => {
      this.sessionService.setItem(
        'personalDetails',
        this.personalDetailsForm.value
      );
      this.updateProgress();
    });

    this.personalDetailsForm.get('photo').valueChanges.subscribe((file: File) => {
      this.reader.readAsDataURL(file);
      this.reader.onload = () => {
        // Code to save the photo to your application's storage goes here
        this.reader.onload = () => {
          const photoDataUrl: string = this.reader.result as string;
          sessionStorage.setItem('photo', photoDataUrl);
        };
      };
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('here');
  }

  updateProgress(): void {
    let validControlsCount = 0;
    for (const controlName in this.personalDetailsForm.controls) {
      if (this.personalDetailsForm.controls.hasOwnProperty(controlName)) {
        const control = this.personalDetailsForm.controls[controlName];
        if (control.valid) {
          validControlsCount++;
        }
      }
    }

    this.completenessService.decreasePercentageCompleteness(
      this.DETAIL_PROGRESS_VALUE * this.currProgress
    );
    this.currProgress = validControlsCount;
    this.completenessService.increasePercentageCompleteness(
      this.DETAIL_PROGRESS_VALUE * this.currProgress
    );
  }
}
