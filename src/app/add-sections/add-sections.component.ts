import { Component, EventEmitter, Output } from '@angular/core';
import { SectionsService } from '../services/sections.service';

@Component({
  selector: 'app-add-sections',
  templateUrl: './add-sections.component.html',
  styleUrls: ['./add-sections.component.css']
})
export class AddSectionsComponent {
  constructor(
    private sectionsService: SectionsService
  ) {}

  onAddReferences() {
    this.sectionsService.referencesAdded = true;
  }

  get referencesAdded(): boolean {
    return this.sectionsService.referencesAdded;
  }

  onAddExtraCurricularActivities() {
    this.sectionsService.extraCurricularActivitiesAdded = true;
  }

  get extraCurricularActivitiesAdded(): boolean {
    return this.sectionsService.extraCurricularActivitiesAdded;
  }

}
