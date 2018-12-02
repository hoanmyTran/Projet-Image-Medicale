import {Component, OnInit} from '@angular/core';

import {ImageMedicale} from '../image';

import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  images: ImageMedicale[];

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.getImages();
  }

  getImages(): void {
    this.imageService.getImages()
      .subscribe(value => this.images = value);
  }
}
