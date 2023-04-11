import { SectionsService } from './services/sections.service';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TemplatesChooserComponent } from './templates-chooser/templates-chooser.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'aicvbuilder';

  constructor(
    private sectionsService: SectionsService,
    private dialog: MatDialog,
  ) {
  }

  chooseTemplate(): void {
    const dialogRef = this.dialog.open(TemplatesChooserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  referencesSection(): boolean {
    return this.sectionsService.getReferenceAdded();
  }

  extraCurricularActivitiesSection(): boolean {
    return this.sectionsService.getExtraCurricularActivitiesAdded();
  }

  hobbiesSection(): boolean {
    return this.sectionsService.getHobbiesAdded();
  }

  languagesSection(): boolean {
    return this.sectionsService.getLanguagesAdded();
  }

  internshipsSection(): boolean {
    return this.sectionsService.getInternshipsAdded();
  }

  coursesSection(): boolean {
    return this.sectionsService.getCoursesAdded();
  }

  customSection(): boolean {
    return this.sectionsService.getCustomSectionsAdded();
  }
}
