import { Component, OnInit ,HostListener,Inject ,Renderer2, ViewChild, ElementRef} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import  AOS from 'aos';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'app-vision-mission',
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.scss'],
 
})
export class VisionMissionComponent implements OnInit {
  lang:String='ar'
  AOS:any ;
   constructor(private elementRef: ElementRef,public translate: TranslateService, public language:LanguageService) {
  
  }

  ngOnInit() {
    AOS.init( {duration: 500, once: false,})
   AOS.refresh();
   this.language.languge.subscribe(()=>{
    console.log( this.language.languge.value)
    this.lang=this.language.languge.value
   })
}
}
