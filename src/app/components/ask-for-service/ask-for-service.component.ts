import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-ask-for-service',
  templateUrl: './ask-for-service.component.html',
  styleUrls: ['./ask-for-service.component.scss']
})
export class AskForServiceComponent {
  constructor( public translate: TranslateService, public language:LanguageService){}

  lang:String="ar"
  ngOnInit(): void {
   

    this.language.languge.subscribe(()=>{
     console.log( this.language.languge.value)
     this.lang=this.language.languge.value
    })
   
  }
}
