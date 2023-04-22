import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  public hobbiesForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService,
    private sessionService: SessionService
  ) {}
  
  ngOnInit(): void {
    this.hobbiesForm = this.resumeService.getHobbiesFrom();

    const storedOnSession = this.sessionService.getItem('hobbies');
    if (storedOnSession) {
      this.hobbiesForm.patchValue(storedOnSession);
    }

    this.hobbiesForm.valueChanges.subscribe(() => {
      this.sessionService.setItem('hobbies', this.hobbiesForm.value);
    });    
  }


  capitalize() {
    this.resumeService.capitalize(this.hobbiesForm, 'hobbies');
  }
}
