import { Injectable } from '@angular/core';
import html2pdf from 'html2pdf.js';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  toPdf(htmlContent: any) {
    const options = {
      margin: [0, 0],
      filename: 'my-document.pdf',
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { scale: 4, dpi: 300, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'avoid-all', after: '.page-break' },
    };

    // Get the height of the HTML content
    // const htmlHeight: any = htmlContent?.offsetHeight;

    // Calculate the height of an A4 page in pixels
    // const a4Width = 8.27 * 72; // A4 width in pixels
    // const a4Height = 11.69 * 72; // A4 height in pixels

    // Calculate the number of A4 pages needed to display the content
    // const numPages = Math.ceil(htmlHeight / a4Height);

    // Log the number of pages needed to the console
    // console.log(`HTML content requires ${numPages} A4 pages to display`);

    // Convert the HTML content to PDF using html2pdf
    // html2pdf().from(htmlContent).set(options).outputPdf().then((pdf: any) => {
      // Do something with the PDF
    // });

    html2pdf().set(options).from(htmlContent).save();

    // html2pdf()
    //   .from(this.html)
    //   .set(options)
    //   .outputPdf()
    //   .then((pdf: any) => {
    //     // Do something with the PDF file, e.g. save it to disk or display it in the browser
    //     const blob = new Blob([pdf], { type: 'application/pdf' });
    //     const url = URL.createObjectURL(blob);
    //     window.open(url);
    //   })
    //   .catch((error: any) => {
    //     console.error(error);
    //   });
  }
}
