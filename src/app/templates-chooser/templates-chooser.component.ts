import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-templates-chooser',template: `
  <div class="overlay">
    <div class="carousel-container">
      <img *ngFor="let template of templates; let i = index" [src]="template" width="150px">
    </div>
    <button (click)="closeDialog()">Choose</button>
  </div>
`,
styles: [`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  
  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel-container img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 10px;
  }
  
  button {
    padding: 10px;
    border: none;
    background-color: #fff;
    color: #333;
    border-radius: 5px;
    cursor: pointer;
  }
`],
})
export class TemplatesChooserComponent {

  public templates: String[] = [
    "https://marketplace.canva.com/EAE8mhdnw_g/2/0/1131w/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg",
    "https://www.resumehelp.com/wp-content/uploads/2022/12/Resume-Template-Alpha-Page_Blueprint-min.png",
  ]

  constructor(
    private templateService: TemplateService,
    private dialogRef: MatDialogRef<TemplatesChooserComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
