import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setItem(key: string, value: object) {
    let stringifiedForm = JSON.stringify(value);

    sessionStorage.setItem(key, stringifiedForm);
  }

  getItem(key: string): object[] | null {
    let sessionForm: string | null = sessionStorage.getItem(key);

    if (sessionForm?.length) {
      let parsedForm: object[] = JSON.parse(sessionForm);

      return parsedForm;
    }

    return null;
  }
}
