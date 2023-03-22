import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {
  public hobbiesForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService
  ) {
    this.hobbiesForm = this.resumeService.getHobbiesFrom();
  }
}
