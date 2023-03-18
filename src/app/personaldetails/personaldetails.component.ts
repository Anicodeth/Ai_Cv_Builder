import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  public personalDetailsForm: any;
  public expand: boolean = false;

  constructor(
    private resumeService: ResumeService
  ) { }

  expandPersonal() {
    this.expand = !this.expand;
  }

  ngOnInit(): void {
    this.personalDetailsForm = this.resumeService.getPersonalDetailsForm();
  }


}
