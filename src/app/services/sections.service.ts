import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  public referencesAdded: boolean = false;
  public extraCurricularActivitiesAdded: boolean = false;
  public hobbiesAdded: boolean = false;
  public coursesAdded: boolean = false;
  public internshipsAdded: boolean = false;
  public languagesAdded: boolean = false;
  public customSectionsAdded: boolean = false;

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
