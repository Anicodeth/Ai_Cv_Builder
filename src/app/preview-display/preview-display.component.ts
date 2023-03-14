import { Component } from '@angular/core';

@Component({
  selector: 'app-preview-display',
  templateUrl: './preview-display.component.html',
  styleUrls: ['./preview-display.component.css']
})
export class PreviewDisplayComponent {
  public pageLinks = [
    "https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg",
    "https://resumegenius.com/wp-content/uploads/Minimalist-Professional-Resume-Skin-Blue.png"
  ]
  public totalPages: number = this.pageLinks.length;
  public currentPage: number = 1;

  /**
   * If the current CV being built by the user has multiple pages, show the next one
   * (Returns) void
   */
  displayNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage += 1;
    }
  }
  
  /**
   * If the current CV being built by the user has multiple pages,
   * and the page currently in display is not page 1, show the left one
   * (Return) void
   */
  displayPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }

}
