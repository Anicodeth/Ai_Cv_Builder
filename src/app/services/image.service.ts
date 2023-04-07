import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imageData = new BehaviorSubject<string>(sessionStorage.getItem('imageData') || '');

  setImageData(data: string) {
    sessionStorage.setItem('imageData', data);
    this.imageData.next(data);
  }

  getImageData() {
    return this.imageData.asObservable();
  }
}
