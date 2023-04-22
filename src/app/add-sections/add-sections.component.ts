import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  onAddReferences(): void {
    this.sectionsService.referencesAdded = true;
  }

  get referencesAdded(): boolean {
    return this.sectionsService.referencesAdded;
  }

  onAddCertifications(): void {
    this.sectionsService.certificationsAdded = true;
  }

  get certificationsAdded(): boolean {
    return this.sectionsService.certificationsAdded;
  }

  onAddHobbies(): void {
    this.sectionsService.hobbiesAdded = true;
  }

  get hobbiesAdded(): boolean {
    return this.sectionsService.getHobbiesAdded();
  }

  onAddLanguages(): void {
    this.sectionsService.languagesAdded = true;
  }

  get languagesAdded(): boolean {
    return this.sectionsService.getLanguagesAdded();
  }

  onAddInternships(): void {
    this.sectionsService.internshipsAdded = true;
  }

  get internshipsAdded(): boolean {
    return this.sectionsService.getInternshipsAdded();
  }

  onAddCourses(): void {
    this.sectionsService.coursesAdded = true;
  }

  get coursesAdded(): boolean {
    return this.sectionsService.getCoursesAdded();
  }

  onAddCustomSections(): void {
    this.sectionsService.customSectionsAdded = true;
  }

  get customSections(): boolean {
    return this.sectionsService.getCustomSectionsAdded();
  }

}
