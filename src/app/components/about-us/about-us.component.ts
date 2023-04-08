import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

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
