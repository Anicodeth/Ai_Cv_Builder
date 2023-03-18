import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  public referencesAdded: boolean = false;
  public extraCurricularActivitiesAdded: boolean = false;
}
