import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {ImageMedicale} from '../image';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {
  @Input() image: ImageMedicale;
  @ViewChild('myCanvas') canvas: ElementRef;
  private cx: CanvasRenderingContext2D;
  private canvasEl: HTMLCanvasElement;
  private rect = {
    startX: 0,
    startY: 0,
    w: 0,
    h: 0
  };
  private drag = false;

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.canvasEl = this.canvas.nativeElement;
    this.cx = this.canvasEl.getContext('2d');
    this.getImage();
  }

  getImage(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.imageService.getImage(id)
      .subscribe(image => this.image = image);
  }

  // go back to the last location
  goBack(): void {
    this.location.back();
  }


  // start to listen events
  init(): void {
    this.canvasEl.addEventListener('mousedown', this.mouseDown.bind(this));
    this.canvasEl.addEventListener('mouseup', this.mouseUp.bind(this));
    this.canvasEl.addEventListener('mousemove', this.mouseMove.bind(this));
  }

  // event when mouse down
  mouseDown(e): void {
    this.rect.startX = e.pageX - this.canvasEl.offsetLeft;
    this.rect.startY = e.pageY - this.canvasEl.offsetTop;
    this.drag = true;
  }


  // event when mouse up
  mouseUp(): void {
    this.drag = false;
  }


  // event when moving mouse
  mouseMove(e): void {
    if (this.drag) {
      this.rect.w = (e.pageX - this.canvasEl.offsetLeft) - this.rect.startX;
      this.rect.h = (e.pageY - this.canvasEl.offsetTop) - this.rect.startY;
      this.cx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
      this.draw();
    }
  }

  // draw medical image and rectangle with cursor's given position
  draw(): void {
    this.drawImageMedicale();
    this.cx.fillRect(this.rect.startX, this.rect.startY, this.rect.w, this.rect.h);
  }

  // draw the medical image in the list
  drawImageMedicale(): void {
    const localImage = new Image();
    localImage.src = this.image.url;
    this.cx.drawImage(localImage, 0, 0, this.canvasEl.width, this.canvasEl.height);
  }

  // start to draw medical image and rectangle
  edit(): void {
    this.drawImageMedicale();
    this.init();
  }
}
