import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private templateIndex: number = 0;

  constructor() { }

  get chosenTemplateIndex(): number {
    return this.templateIndex;
  }

  setTemplateIndex(index: number): void {
    this.templateIndex = index;
  }
}
