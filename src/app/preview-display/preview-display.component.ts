import { Component } from '@angular/core';


@Component({
  selector: 'app-preview-display',
  templateUrl: './preview-display.component.html',
  styleUrls: ['./preview-display.component.css']
})
export class PreviewDisplayComponent {
  // I am pages list here to emulate the user having multiple pages
  public pages = [
    "http://cdn.shopify.com/s/files/1/0405/8713/products/smooth-white-card-with-border_365702c6-de85-46b3-a4be-147c49f4e858_600x.jpg?v=1470642181",
    "http://cdn.shopify.com/s/files/1/0405/8713/products/smooth-white-card-with-border_365702c6-de85-46b3-a4be-147c49f4e858_600x.jpg?v=1470642181",
    "http://cdn.shopify.com/s/files/1/0405/8713/products/smooth-white-card-with-border_365702c6-de85-46b3-a4be-147c49f4e858_600x.jpg?v=1470642181",
  ]
  public totalPages: number = this.pages.length;
  public currentPage: number = 1;

  /**
   * If the current CV being built by the user has multiple pages,
   * show the next one
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