import { Injectable } from '@angular/core';

import { ImageMedicale } from '../image';
import { IMAGES } from '../mock-images';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImages(): Observable<ImageMedicale[]> {
    return of(IMAGES);
  }

  getImage(id: number): Observable<ImageMedicale> {
  // TODO: send the message _after_ fetching the image
    return of(IMAGES.find(image => image.id === id));
  }
}
