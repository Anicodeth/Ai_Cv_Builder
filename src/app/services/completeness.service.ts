import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompletenessService {
  private percentageCompleteness: number = 0;

  constructor() { }

  getPercentageCompleteness(): number {
    return this.percentageCompleteness;
  }

  increasePercentageCompleteness(delta: number): void {
    this.percentageCompleteness += delta;
  }

  decreasePercentageCompleteness(delta: number): void {
    this.percentageCompleteness -= delta;
  }
}
