import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-other-service',
  templateUrl: './other-service.component.html',
  styleUrls: ['./other-service.component.scss']
})
export class OtherServiceComponent implements OnInit {
  lang:String='ar'
  constructor(public translate: TranslateService, public language:LanguageService){}
ngOnInit(){
  this.language.languge.subscribe(()=>{
    console.log( this.language.languge.value)
    this.lang=this.language.languge.value
   })
}
}
