import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  public referencesAdded: boolean;
  public extraCurricularActivitiesAdded: boolean;
  public hobbiesAdded: boolean;
  public coursesAdded: boolean;
  public internshipsAdded: boolean;
  public languagesAdded: boolean;
  public customSectionsAdded: boolean;

  constructor(
    private sessionService: SessionService
  ) {
    this.referencesAdded = Boolean(this.sessionService.getItem('references'));
    this.extraCurricularActivitiesAdded = Boolean(this.sessionService.getItem('extraCurricularActivities'));
    this.hobbiesAdded = Boolean(this.sessionService.getItem('hobbies'));
    this.coursesAdded = Boolean(this.sessionService.getItem('courses'));
    this.internshipsAdded = Boolean(this.sessionService.getItem('internships'));
    this.languagesAdded = Boolean(this.sessionService.getItem('languages'));
    this.customSectionsAdded = Boolean(this.sessionService.getItem('customSections'));
  }

  getReferenceAdded(): boolean {
    return this.referencesAdded;
  }

  getExtraCurricularActivitiesAdded(): boolean {
    return this.extraCurricularActivitiesAdded;
  }

  getHobbiesAdded(): boolean {
    return this.hobbiesAdded;
  }

  getCoursesAdded(): boolean {
    return this.coursesAdded;
  }

  getInternshipsAdded(): boolean {
    return this.internshipsAdded;
  }

  getLanguagesAdded(): boolean {
    return this.languagesAdded;
  }

  getCustomSectionsAdded(): boolean {
    return this.customSectionsAdded;
  }
}
