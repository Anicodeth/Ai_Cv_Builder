import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-templates-chooser',
  templateUrl: './templates-chooser.component.html',
  styleUrls: ['./templates-chooser.component.css']
})
export class TemplatesChooserComponent {

  constructor(
    private templateService: TemplateService,
    private dialogRef: MatDialogRef<TemplatesChooserComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
