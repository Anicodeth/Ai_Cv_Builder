import { Component, OnInit } from '@angular/core';
import { CompletenessService } from '../services/completeness.service';


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  constructor(
    private completenessService: CompletenessService
  ) { }

  get progressPercent(): number {
    return this.completenessService.getPercentageCompleteness();
  }

  get progressColor(): string {
    let color: string;
    if (this.progressPercent == 100) {
      color = "blue";
    } else if (this.progressPercent >= 70) {
      color = "green";
    } else if (this.progressPercent >= 30) {
      color = "yellow";
    } else {
      color = "red";
    }

    return color;
  }
}
