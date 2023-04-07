import { Injectable } from '@angular/core';
import  jsPDF  from 'jspdf';
import domtoimage from 'dom-to-image';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor() { }

  toPdf(dashboard: any) {
    const dashboardHeight = dashboard.clientHeight;
    const dashboardWidth = dashboard.clientWidth;
    const options = { background: 'white', width: dashboardWidth, height: dashboardHeight };
  
    domtoimage.toPng(dashboard, options).then((imgData: any) => {
         const doc = new jsPDF(dashboardWidth > dashboardHeight ? 'l' : 'p', 'mm', [dashboardWidth, dashboardHeight]);
         const imgProps = doc.getImageProperties(imgData);
         const pdfWidth = doc.internal.pageSize.getWidth();
         const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
         doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
         doc.save('preview.pdf');
    });
  }
}
