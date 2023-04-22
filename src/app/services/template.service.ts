import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  public template: string = 'modern-template';

  constructor() { }

  get chosenTemplate(): string {
    return this.template;
  }

  setTemplate(templateName: string): void {
    this.template = templateName;
  }
}
