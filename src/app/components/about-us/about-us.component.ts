import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  lang:String=''
  constructor( public translate: TranslateService, public language:LanguageService ,public render:Renderer2,
    private elementRef: ElementRef){}
  ngOnInit(): void {
  
    this.language.languge.subscribe(()=>{
      console.log( this.language.languge.value)
      this.lang=this.language.languge.value
     })
   
  }
  swichLanguage(){
    this.language.swichLang()
    }
    
}
export const slideInAnimation = trigger('slideInAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-100%)' }),
    animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' })),
  ]),
]);