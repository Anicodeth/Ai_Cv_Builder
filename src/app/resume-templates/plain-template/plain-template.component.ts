import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-plain-template',
  templateUrl: './plain-template.component.html',
  styleUrls: ['./plain-template.component.css']
})
export class PlainTemplateComponent implements OnInit {
  public references: any;

  constructor (
    private resumeService: ResumeService,
  ) {}

  ngOnInit() {
    this.references = this.resumeService.getReferencesForm();
  }
}
