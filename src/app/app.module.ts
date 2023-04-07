import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { SwiperModule } from ;
// import {SwiperModule} from 'swiper/angular';

// import { MatCarouselModule } from '@ngmodule/material-carousel';

// import { register } from 'swiper/element/bundle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TranslateModule ,TranslateLoader  } from '@ngx-translate/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ServicesComponent } from './components/services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorksComponent } from './components/works/works.component';
import { WorkDetailsComponent } from './components/work-details/work-details.component';
import { LogoComponent } from './components/logo/logo.component';
import { OtherServiceComponent } from './components/other-service/other-service.component';
import { VisionMissionComponent } from './components/vision-mission/vision-mission.component';

import { FooterComponent } from './components/footer/footer.component';
import { AskForServiceComponent } from './components/ask-for-service/ask-for-service.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { VisionComponent } from './components/vision/vision.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    AboutUsComponent,
    ServicesComponent,
    WorksComponent,
    WorkDetailsComponent,
    LogoComponent,
    OtherServiceComponent,
    VisionMissionComponent,
    FooterComponent,
    AskForServiceComponent,
    SpinnerComponent,
    ContactUsComponent,
    VisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
     BrowserAnimationsModule,
    //  MatCarouselModule,

    TranslateModule.forRoot({
      
        loader: {
          provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
      
    }),
    
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
