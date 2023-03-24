import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PersonaldetailsComponent implements OnInit, OnChanges {

  public personalDetailsForm: any;
  public expand: boolean = false;

  constructor(
    private resumeService: ResumeService,
    private sessionStorageService: SessionStorageService
  ) { }

  expandPersonal() {
    this.expand = !this.expand;
  }

  ngOnInit() {
    try {
      this.personalDetailsForm = this.sessionStorageService.getItem("personalDetails");
    } catch {
      this.personalDetailsForm = this.resumeService.getPersonalDetailsForm();
    }
    console.log(this.personalDetailsForm);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sessionStorageService.store("personalDetails", this.personalDetailsForm);
    console.log(this.personalDetailsForm);
  }


}
