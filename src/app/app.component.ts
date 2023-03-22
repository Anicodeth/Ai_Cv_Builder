import { Component } from '@angular/core';
import { SectionsService } from './services/sections.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'aicvbuilder';

  constructor(
    private sectionsService: SectionsService
  ) {
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
