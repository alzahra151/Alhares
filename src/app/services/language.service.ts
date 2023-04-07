import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public languge: BehaviorSubject<String>
  direction: string='';
 
  constructor(public translate : TranslateService) { 
    localStorage.setItem('lang','ar')
    this.languge= new BehaviorSubject<String>(localStorage.getItem('lang') || "{}")
  }
  swichLang(){
    let curentLang=this.languge.value=='en'?'ar':'en'
    this.translate.use(curentLang)
    this.direction=curentLang=='ar'?'rtl':'ltr'
    localStorage.setItem('lang',curentLang)
    localStorage.setItem('direction', this.direction)
   
    this.languge.next(localStorage.getItem('lang') || "{}")

  }
}
