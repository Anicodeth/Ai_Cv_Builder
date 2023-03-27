import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent { //implements  OnInit, OnChanges {

  public personalDetailsForm: any;
  public expand: boolean = false;

  constructor(
    private resumeService: ResumeService
  ) { }

  expandPersonal() {
    this.expand = !this.expand;
  }

  // ngOnInit(): void {
  //   console.log(this.personalDetailsForm.touched);
  //   this.personalDetailsForm = this.resumeService.getPersonalDetailsForm();
  //   // const storedName = localStorage.getItem("name");

  //   // if (storedName) {
  //   //   this.personalDetailsForm.value.firstName = storedName;
  //   // }
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(this.personalDetailsForm.touched);
  //   // localStorage.setItem("name", this.personalDetailsForm.value.firstName);
  // }


}
