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
    return this.sectionsService.referencesAdded;
  }

  extraCurricularActivitiesSection(): boolean {
    return this.sectionsService.extraCurricularActivitiesAdded;
  }
}
