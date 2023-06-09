import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AiService } from '../ai.service';
import { CompletenessService } from '../services/completeness.service';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';
import { ImageService } from '../services/image.service';
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
  public imageData: any;


  constructor(
    private resumeService: ResumeService,
    private sessionService: SessionService,
    private completenessService: CompletenessService,
    private aiService: AiService,
    private imageService: ImageService

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
    this.imageService.getImageData().subscribe((data) => {
      this.imageData = data;
    });
    
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
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      if (imageData) {
        this.imageService.setImageData(imageData.toString());
      }
    };
    reader.readAsDataURL(file);
  }

  capitalize(formControlName: string) {
    this.resumeService.capitalize(this.personalDetailsForm, formControlName);
  }
  

}
