import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResumeService } from '../services/resume.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
  public referencesForm: FormGroup | any;
  constructor(
    private fb: FormBuilder,
    private resumeService: ResumeService,
    private sessionService: SessionService
  ) {}
  
  ngOnInit(): void {
    this.referencesForm = this.resumeService.getReferencesForm();

    const storedOnSession = this.sessionService.getItem('references');
    if (storedOnSession) {
      storedOnSession.forEach((item: any) => {
        this.references.push(
          this.fb.group(item)
        )
      });
    }

    this.referencesForm.valueChanges.subscribe(() => {
      this.sessionService.setItem('references', this.references.value);
    });
  }

  get references(): FormArray {
    return this.referencesForm.get('references') as FormArray;
  }

  addReference() {
    this.references.push(
      this.fb.group({
        name: [null, Validators.required],
        company: [null, Validators.required],
        phone: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
      })
    );

  }

  removeReference(index: number) {
    this.references.removeAt(index);
  }

  capitalize(formControlName: string, index: number) {
    this.resumeService.capitalize(this.references.at(index), formControlName);
  }

}
