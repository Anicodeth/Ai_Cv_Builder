import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  public personalDetailsForm: any;
  public expand: boolean = false;

  constructor(
    private resumeService: ResumeService,
    private sessionService: SessionService
  ) { }

  expandPersonal() {
    this.expand = !this.expand;
  }

  ngOnInit(): void {
    this.personalDetailsForm = this.resumeService.getPersonalDetailsForm();

    const storedOnSession = this.sessionService.getItem('personalDetails');
    if (storedOnSession) {
      this.personalDetailsForm.patchValue(storedOnSession);
    }

    this.personalDetailsForm.valueChanges.subscribe(() => {
      this.sessionService.setItem('personalDetails', this.personalDetailsForm.value);
    });
  }

}
