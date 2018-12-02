import {NgModule} from '@angular/core';
import {ImagesComponent} from './images/images.component';
import {ImageDetailComponent} from './image-detail/image-detail.component';
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/images', pathMatch: 'full'},
  {path: 'detail/:id', component: ImageDetailComponent},
  {path: 'images', component: ImagesComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
