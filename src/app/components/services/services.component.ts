import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import * as $ from 'jquery'
import { LanguageService } from 'src/app/services/language.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{
  constructor(public translate: TranslateService, public language:LanguageService){

  }
  ngOnInit(): void {
    // $('#myCarousel').on('slide.bs.carousel', function (event) {
    //   var index = event;
    //   var indicator = $(this).find('.carousel-indicators li[data-slide-to="' + index + '"]');
    //   indicator.addClass('active').siblings().removeClass('active');
    // });
    this.language.languge.subscribe(()=>{
      console.log( this.language.languge.value)
      
     })
  

  }


}
