import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageDetailComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
