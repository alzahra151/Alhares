import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';
import { WorksComponent } from './components/works/works.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {path:"" ,component:HomeComponent},
  {path:"work/:id" ,component:WorkDetailsComponent},
  {path:"ContactUs" ,component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
